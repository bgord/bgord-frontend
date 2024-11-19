import { useCallback, useMemo, useRef, useState } from "react";

import { DurationFormatter } from "../durations";
import { useField } from "./use-field";

type AudioDurationType = number;
type AudioCurrentTimeType = number;
type AudioVolumeType = number;

export const AUDIO_DEFAULT_VOLUME: AudioVolumeType = 1;

/**
 * Audio player state enum
 * @description Represents the possible states of the audio player
 */
export enum UseAudioState {
  initial = "initial",
  ready = "ready",
  playing = "playing",
  paused = "paused",
}

// Audio Constants
const AUDIO_CONSTANTS = {
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

/**
 * useAudio hook configuration options
 */
export type UseAudioConfig = {
  id: string;
  src: string;
};

/**
 * useAudio hook return value
 */
export type UseAudioReturnType = {
  props: {
    audio: {
      src: UseAudioConfig["src"];
      onTimeUpdate: (event: Event) => void;
      onLoadedMetadata: (event: Event) => void;
      onEnded: (event: Event) => void;
      controls: false;
      "aria-label": string;
      "aria-describedby": string;
      role: "application";
    };
    player: {
      min: 0;
      step: 1;
      max: AudioDurationType;
      value: AudioDurationType;
      onInput: (event: Event) => void;
      style: { "--percentage": string };
      "aria-label": string;
      "aria-valuemin": number;
      "aria-valuemax": number;
      "aria-valuenow": number;
      "aria-valuetext": string;
      role: "slider";
    };
    volume: {
      min: 0;
      max: 1;
      step: 0.01;
      value: AudioVolumeType;
      onInput: (event: Event) => void;
      style: { "--percentage": string };
      "aria-label": string;
      "aria-valuemin": 0;
      "aria-valuemax": 1;
      "aria-valuenow": number;
      "aria-valuetext": string;
      role: "slider";
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
  };

  meta: {
    state: UseAudioState;
    isInitial: boolean;
    isReady: boolean;
    isPlaying: boolean;
    isPaused: boolean;
    matches: (states: UseAudioState[]) => boolean;
    percentage: {
      raw: number;
      formatted: string;
    };
    currentTime: {
      raw: AudioCurrentTimeType;
      formatted: string;
    };
    duration: {
      raw: AudioDurationType;
      formatted: string;
    };
    volume: {
      value: AudioVolumeType;
      raw: number;
      formatted: string;
    };
    muted: boolean;
  };
};

/**
 * Custom hook for managing audio playback with accessibility support
 * @description Provides a comprehensive API for audio playback control with proper ARIA attributes
 *
 * @param config - Configuration object
 *
 * @example
 * ```tsx
 * function AudioPlayer() {
 *   const audio = useAudio({
 *     id: "main-player",
 *     src: "https://example.com/audio.mp3",
 *   });
 *
 *   return (
 *     <div>
 *       <audio {...audio.props.audio} />
 *       <input type="range" {...audio.props.player} />
 *       <button onClick={audio.actions.play}>Play</button>
 *     </div>
 *   );
 * }
 * ```
 */
export function useAudio(config: UseAudioConfig): UseAudioReturnType {
  const [state, setState] = useState<UseAudioState>(UseAudioState.initial);

  const ref = useRef<HTMLAudioElement | null>(null);

  const duration = useField<AudioDurationType>({
    name: "duration",
    defaultValue: AUDIO_CONSTANTS.TIME.MIN,
  });
  const currentTime = useField<AudioCurrentTimeType>({
    name: "currentTime",
    defaultValue: AUDIO_CONSTANTS.TIME.MIN,
  });
  const volume = useField<AudioVolumeType>({
    name: "volume",
    defaultValue: AUDIO_DEFAULT_VOLUME,
  });

  const muted = useMemo(() => volume.value === AUDIO_CONSTANTS.VOLUME.MIN, [volume.value]);

  const percentage = useMemo(() => {
    return duration.value === AUDIO_CONSTANTS.TIME.MIN
      ? AUDIO_CONSTANTS.PERCENTAGE.MIN
      : Math.round((currentTime.value / duration.value) * AUDIO_CONSTANTS.PERCENTAGE.MAX);
  }, [currentTime.value, duration.value]);

  // Memoized callbacks
  const play = useCallback(() => {
    if (ref.current) {
      ref.current.play();
      setState(UseAudioState.playing);
    }
  }, []);

  const pause = useCallback(() => {
    if (ref.current) {
      ref.current.pause();
      setState(UseAudioState.paused);
    }
  }, []);

  const reset = useCallback(() => {
    if (ref.current) {
      ref.current.currentTime = AUDIO_CONSTANTS.TIME.MIN;
      ref.current.pause();
      currentTime.set(AUDIO_CONSTANTS.TIME.MIN);
      setState(UseAudioState.paused);
    }
  }, [currentTime]);

  const mute = useCallback(() => {
    if (ref.current) {
      ref.current.volume = AUDIO_CONSTANTS.VOLUME.MIN;
      volume.set(AUDIO_CONSTANTS.VOLUME.MIN);
    }
  }, [volume]);

  const unmute = useCallback(() => {
    if (ref.current) {
      ref.current.volume = AUDIO_CONSTANTS.VOLUME.DEFAULT;
      volume.set(AUDIO_CONSTANTS.VOLUME.DEFAULT);
    }
  }, [volume]);

  const seek = useCallback(
    (event: Event) => {
      const target = event.currentTarget as HTMLInputElement;

      if (ref.current) {
        ref.current.currentTime = target.valueAsNumber;
        currentTime.set(target.valueAsNumber);
      }
    },
    [currentTime],
  );

  const onLoadedMetadata = useCallback(
    (event: Event) => {
      const target = event.currentTarget as HTMLAudioElement;

      ref.current = target;

      duration.set(Math.round(target.duration));
      currentTime.set(target.currentTime);
      volume.set(target.volume);
      setState(UseAudioState.ready);
    },
    [duration, currentTime, volume],
  );

  const onTimeUpdate = useCallback(
    (event: Event) => {
      const target = event.target as HTMLAudioElement;
      currentTime.set(Math.round(target.currentTime));
    },
    [currentTime],
  );

  const onEnded = useCallback(() => setState(UseAudioState.paused), []);

  const changeVolume = useCallback(
    (event: Event) => {
      const target = event.currentTarget as HTMLInputElement;

      if (ref.current) {
        ref.current.volume = target.valueAsNumber;
        volume.set(target.valueAsNumber);
      }
    },
    [volume],
  );

  const matches = useCallback((states: UseAudioState[]) => states.includes(state), [state]);

  // Memoized return value
  return useMemo(
    () => ({
      props: {
        audio: {
          src: config.src,
          onTimeUpdate,
          onLoadedMetadata,
          onEnded,
          controls: false,
          "aria-label": `Audio player for ${config.src}`,
          "aria-describedby": `${config.id}-description`,
          role: "application",
        },
        player: {
          min: AUDIO_CONSTANTS.TIME.MIN,
          step: AUDIO_CONSTANTS.TIME.STEP,
          max: duration.value,
          value: currentTime.value,
          onInput: seek,
          style: { "--percentage": `${percentage}%` },
          "aria-label": "Seek audio position",
          "aria-valuemin": AUDIO_CONSTANTS.TIME.MIN,
          "aria-valuemax": duration.value,
          "aria-valuenow": currentTime.value,
          "aria-valuetext": `${DurationFormatter.format(
            currentTime.value,
          )} of ${DurationFormatter.format(duration.value)}`,
          role: "slider",
        },
        volume: {
          min: AUDIO_CONSTANTS.VOLUME.MIN,
          max: AUDIO_CONSTANTS.VOLUME.MAX,
          step: AUDIO_CONSTANTS.VOLUME.STEP,
          value: volume.value,
          onInput: changeVolume,
          style: { "--percentage": `${Math.floor(volume.value * 100)}%` },
          "aria-label": "Volume control",
          "aria-valuemin": AUDIO_CONSTANTS.VOLUME.MIN,
          "aria-valuemax": AUDIO_CONSTANTS.VOLUME.MAX,
          "aria-valuenow": volume.value,
          "aria-valuetext": `Volume ${Math.floor(volume.value * 100)}%`,
          role: "slider",
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
      },
      meta: {
        state,
        isInitial: state === UseAudioState.initial,
        isReady: state === UseAudioState.ready,
        isPlaying: state === UseAudioState.playing,
        isPaused: state === UseAudioState.paused,
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
      config.src,
      config.id,
      state,
      duration.value,
      currentTime.value,
      volume.value,
      percentage,
      muted,
      matches,
      play,
      pause,
      mute,
      unmute,
      reset,
      seek,
      changeVolume,
      onTimeUpdate,
      onLoadedMetadata,
      onEnded,
    ],
  );
}
