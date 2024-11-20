import { useRef, useState, useCallback, useMemo } from "react";
import { DurationFormatter } from "../durations";
import { useField } from "./use-field";

export type UseVideoSrcType = string;
type VideoDurationType = number;
type VideoCurrentTimeType = number;
type VideoVolumeType = number;

export const VIDEO_DEFAULT_VOLUME: VideoVolumeType = 1;

export enum UseVideoState {
  initial = "initial",
  ready = "ready",
  playing = "playing",
  paused = "paused",
}

export type UseVideoReturnType = {
  props: {
    video: {
      src: UseVideoSrcType;
      onTimeUpdate: (event: Event) => void;
      onLoadedMetadata: (event: Event) => void;
      onEnded: (event: Event) => void;
      controls: false;
    };
    player: {
      min: 0;
      step: 1;
      max: VideoDurationType;
      value: VideoDurationType;
      onInput: (event: Event) => void;
      style: { "--percentage": string };
    };
    volume: {
      min: 0;
      max: 1;
      step: 0.01;
      value: VideoVolumeType;
      onInput: (event: Event) => void;
      style: { "--percentage": string };
    };
  };
  actions: {
    play: VoidFunction;
    pause: VoidFunction;
    mute: VoidFunction;
    unmute: VoidFunction;
    reset: VoidFunction;
    seek: (event: Event) => void;
    changeVolume: (event: Event) => void;
    triggerFullscreen: VoidFunction;
  };
  meta: {
    state: UseVideoState;
    isInitial: boolean;
    isReady: boolean;
    isPlaying: boolean;
    isPaused: boolean;
    matches: (states: UseVideoState[]) => boolean;
    percentage: {
      raw: number;
      formatted: string;
    };
    currentTime: {
      raw: VideoCurrentTimeType;
      formatted: string;
    };
    duration: {
      raw: VideoDurationType;
      formatted: string;
    };
    volume: {
      value: VideoVolumeType;
      raw: number;
      formatted: string;
    };
    muted: boolean;
  };
};

/**
 * Hook for managing video playback state and controls
 *
 * @example
 * ```tsx
 * function VideoPlayer() {
 *   const video = useVideo("https://example.com/video.mp4");
 *
 *   return (
 *     <div>
 *       <video {...video.props.video} />
 *       <input type="range" {...video.props.player} />
 *       <button onClick={video.actions.play}>Play</button>
 *       <button onClick={video.actions.pause}>Pause</button>
 *     </div>
 *   );
 * }
 * ```
 */
export function useVideo(src: UseVideoSrcType): UseVideoReturnType {
  const [state, setState] = useState<UseVideoState>(UseVideoState.initial);
  const ref = useRef<HTMLVideoElement | null>(null);

  const duration = useField<VideoDurationType>({
    name: "duration",
    defaultValue: 0,
  });

  const currentTime = useField<VideoCurrentTimeType>({
    name: "currentTime",
    defaultValue: 0,
  });

  const volume = useField<VideoVolumeType>({
    name: "volume",
    defaultValue: VIDEO_DEFAULT_VOLUME,
  });

  const muted = useMemo(() => volume.value === 0, [volume.value]);
  const percentage = useMemo(
    () =>
      duration.value === 0
        ? 0
        : Math.round((currentTime.value / duration.value) * 100),
    [currentTime.value, duration.value]
  );

  const play = useCallback(() => {
    if (!ref.current) return;
    ref.current.play();
    setState(UseVideoState.playing);
  }, []);

  const pause = useCallback(() => {
    if (!ref.current) return;
    ref.current.pause();
    setState(UseVideoState.paused);
  }, []);

  const reset = useCallback(() => {
    if (!ref.current) return;
    ref.current.currentTime = 0;
    ref.current.pause();
    currentTime.set(0);
    setState(UseVideoState.paused);
  }, [currentTime]);

  const mute = useCallback(() => {
    if (!ref.current) return;
    ref.current.volume = 0;
    volume.set(0);
  }, [volume]);

  const unmute = useCallback(() => {
    if (!ref.current) return;
    ref.current.volume = VIDEO_DEFAULT_VOLUME;
    volume.set(VIDEO_DEFAULT_VOLUME);
  }, [volume]);

  const seek = useCallback(
    (event: Event) => {
      const target = event.currentTarget as HTMLInputElement;
      if (!ref.current) return;
      ref.current.currentTime = target.valueAsNumber;
      currentTime.set(target.valueAsNumber);
    },
    [currentTime]
  );

  const onLoadedMetadata = useCallback(
    (event: Event) => {
      const target = event.currentTarget as HTMLVideoElement;
      ref.current = target;
      duration.set(Math.round(target.duration));
      currentTime.set(target.currentTime);
      volume.set(target.volume);
      setState(UseVideoState.ready);
    },
    [duration, currentTime, volume]
  );

  const onTimeUpdate = useCallback(
    (event: Event) => {
      const target = event.target as HTMLVideoElement;
      currentTime.set(Math.round(target.currentTime));
    },
    [currentTime]
  );

  const onEnded = useCallback(() => setState(UseVideoState.paused), []);

  const changeVolume = useCallback(
    (event: Event) => {
      const target = event.currentTarget as HTMLInputElement;
      if (!ref.current) return;
      ref.current.volume = target.valueAsNumber;
      volume.set(target.valueAsNumber);
    },
    [volume]
  );

  const triggerFullscreen = useCallback(() => {
    if (!ref.current) return;
    ref.current.requestFullscreen?.();
  }, []);

  const matches = useCallback(
    (states: UseVideoState[]) => states.some((given) => given === state),
    [state]
  );

  return useMemo(
    () => ({
      props: {
        video: {
          src,
          onTimeUpdate,
          onLoadedMetadata,
          onEnded,
          controls: false,
        },
        player: {
          min: 0,
          step: 1,
          max: duration.value,
          value: currentTime.value,
          onInput: seek,
          style: { "--percentage": `${percentage}%` },
        },
        volume: {
          min: 0,
          max: 1,
          step: 0.01,
          value: volume.value,
          onInput: changeVolume,
          style: { "--percentage": `${Math.floor(volume.value * 100)}%` },
        },
      },
      actions: {
        play,
        pause,
        mute,
        unmute,
        reset,
        seek,
        changeVolume,
        triggerFullscreen,
      },
      meta: {
        state,
        isInitial: state === UseVideoState.initial,
        isReady: state === UseVideoState.ready,
        isPlaying: state === UseVideoState.playing,
        isPaused: state === UseVideoState.paused,
        matches,
        percentage: {
          raw: percentage,
          formatted: `${percentage}%`,
        },
        currentTime: {
          raw: currentTime.value,
          formatted: DurationFormatter.format(currentTime.value),
        },
        duration: {
          raw: duration.value,
          formatted: DurationFormatter.format(duration.value),
        },
        volume: {
          value: volume.value,
          raw: Math.floor(volume.value * 100),
          formatted: `${Math.floor(volume.value * 100)}%`,
        },
        muted,
      },
    }),
    [
      src,
      onTimeUpdate,
      onLoadedMetadata,
      onEnded,
      duration.value,
      currentTime.value,
      volume.value,
      seek,
      changeVolume,
      percentage,
      play,
      pause,
      mute,
      unmute,
      reset,
      triggerFullscreen,
      state,
      matches,
      muted,
    ]
  );
}
