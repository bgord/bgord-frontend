import { useRef, useState, useCallback, useMemo } from "react";
import { DurationFormatter } from "../durations";
import { useField } from "./use-field";

export type UseVideoSrcType = string;
type VideoDurationType = number;
type VideoCurrentTimeType = number;
type VideoVolumeType = number;

// Video Constants
const VIDEO_CONSTANTS = {
  VOLUME: {
    MIN: 0,
    MAX: 1,
    DEFAULT: 1,
    STEP: 0.01,
  },
  TIME: {
    MIN: 0,
    STEP: 1,
  },
  PERCENTAGE: {
    MIN: 0,
    MAX: 100,
  },
} as const;

export const VIDEO_DEFAULT_VOLUME: VideoVolumeType = VIDEO_CONSTANTS.VOLUME.MAX;

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
    defaultValue: VIDEO_CONSTANTS.TIME.MIN,
  });

  const currentTime = useField<VideoCurrentTimeType>({
    name: "currentTime",
    defaultValue: VIDEO_CONSTANTS.TIME.MIN,
  });

  const volume = useField<VideoVolumeType>({
    name: "volume",
    defaultValue: VIDEO_DEFAULT_VOLUME,
  });

  const muted = useMemo(
    () => volume.value === VIDEO_CONSTANTS.VOLUME.MIN,
    [volume.value]
  );
  const percentage = useMemo(
    () =>
      duration.value === VIDEO_CONSTANTS.VOLUME.MIN
        ? VIDEO_CONSTANTS.VOLUME.MIN
        : Math.round(
            (currentTime.value / duration.value) *
              VIDEO_CONSTANTS.PERCENTAGE.MAX
          ),
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
    ref.current.currentTime = VIDEO_CONSTANTS.TIME.MIN;
    ref.current.pause();
    currentTime.set(VIDEO_CONSTANTS.TIME.MIN);
    setState(UseVideoState.paused);
  }, [currentTime]);

  const mute = useCallback(() => {
    if (!ref.current) return;
    ref.current.volume = VIDEO_CONSTANTS.VOLUME.MIN;
    volume.set(VIDEO_CONSTANTS.VOLUME.MIN);
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
          min: VIDEO_CONSTANTS.TIME.MIN,
          step: VIDEO_CONSTANTS.TIME.STEP,
          max: duration.value,
          value: currentTime.value,
          onInput: seek,
          style: { "--percentage": `${percentage}%` },
        },
        volume: {
          min: VIDEO_CONSTANTS.VOLUME.MIN,
          max: VIDEO_CONSTANTS.VOLUME.MAX,
          step: VIDEO_CONSTANTS.VOLUME.STEP,
          value: volume.value,
          onInput: changeVolume,
          style: {
            "--percentage": `${Math.floor(
              volume.value * VIDEO_CONSTANTS.PERCENTAGE.MAX
            )}%`,
          },
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
          raw: Math.floor(volume.value * VIDEO_CONSTANTS.PERCENTAGE.MAX),
          formatted: `${Math.floor(
            volume.value * VIDEO_CONSTANTS.PERCENTAGE.MAX
          )}%`,
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
