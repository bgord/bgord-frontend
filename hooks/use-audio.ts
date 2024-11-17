import { useRef, useState } from "react";

import { DurationFormatter } from "../durations";
import { useField } from "./use-field";

export type UseAudioSrcType = string;

type AudioDurationType = number;
type AudioCurrentTimeType = number;
type AudioVolumeType = number;

export const AUDIO_DEFAULT_VOLUME: AudioVolumeType = 1;

export enum UseAudioState {
  initial = "initial",
  ready = "ready",
  playing = "playing",
  paused = "paused",
}

export type UseAudioReturnType = {
  props: {
    audio: {
      src: UseAudioSrcType;
      onTimeUpdate: (event: Event) => void;
      onLoadedMetadata: (event: Event) => void;
      onEnded: (event: Event) => void;
      controls: false;
    };
    player: {
      min: 0;
      step: 1;
      max: AudioDurationType;
      value: AudioDurationType;
      onInput: (event: Event) => void;
      style: { "--percentage": string };
    };
    volume: {
      min: 0;
      max: 1;
      step: 0.01;
      value: AudioVolumeType;
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

export function useAudio(src: UseAudioSrcType): UseAudioReturnType {
  const [state, setState] = useState<UseAudioState>(UseAudioState.initial);

  const ref = useRef<HTMLAudioElement | null>(null);

  const duration = useField<AudioDurationType>({
    name: "duration",
    defaultValue: 0,
  });
  const currentTime = useField<AudioCurrentTimeType>({
    name: "currentTime",
    defaultValue: 0,
  });
  const volume = useField<AudioVolumeType>({
    name: "volume",
    defaultValue: AUDIO_DEFAULT_VOLUME,
  });

  const muted = volume.value === 0;

  const percentage = duration.value === 0 ? 0 : Math.round((currentTime.value / duration.value) * 100);

  function play() {
    if (ref.current) {
      ref.current.play();
      setState(UseAudioState.playing);
    }
  }

  function pause() {
    if (ref.current) {
      ref.current.pause();
      setState(UseAudioState.paused);
    }
  }

  function reset() {
    if (ref.current) {
      ref.current.currentTime = 0;
      ref.current.pause();
      currentTime.set(0);
      setState(UseAudioState.paused);
    }
  }

  function mute() {
    if (ref.current) {
      ref.current.volume = 0;
      volume.set(0);
    }
  }

  function unmute() {
    if (ref.current) {
      ref.current.volume = AUDIO_DEFAULT_VOLUME;
      volume.set(AUDIO_DEFAULT_VOLUME);
    }
  }

  function seek(event: Event) {
    const target = event.currentTarget as HTMLInputElement;

    if (ref.current) {
      ref.current.currentTime = target.valueAsNumber;
      currentTime.set(target.valueAsNumber);
    }
  }

  function onLoadedMetadata(event: Event) {
    const target = event.currentTarget as HTMLAudioElement;

    ref.current = target;

    duration.set(Math.round(target.duration));
    currentTime.set(target.currentTime);
    volume.set(target.volume);
    setState(UseAudioState.ready);
  }

  function onTimeUpdate(event: Event) {
    const target = event.target as HTMLAudioElement;
    currentTime.set(Math.round(target.currentTime));
  }

  function onEnded() {
    setState(UseAudioState.paused);
  }

  function changeVolume(event: Event) {
    const target = event.currentTarget as HTMLInputElement;

    if (ref.current) {
      ref.current.volume = target.valueAsNumber;
      volume.set(target.valueAsNumber);
    }
  }

  return {
    props: {
      audio: { src, onTimeUpdate, onLoadedMetadata, onEnded, controls: false },
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
    actions: { play, pause, mute, unmute, reset, seek, changeVolume },
    meta: {
      state,
      isInitial: state === UseAudioState.initial,
      isReady: state === UseAudioState.ready,
      isPlaying: state === UseAudioState.playing,
      isPaused: state === UseAudioState.paused,
      matches: (states: UseAudioState[]) => states.some((given) => given === state),
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
  };
}
