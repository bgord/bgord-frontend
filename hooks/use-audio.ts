import * as React from "react";

import { DurationFormatter } from "../durations";
import { useField } from "./use-field";

export const AUDIO_DEFAULT_VOLUME = 1;

export type UseAudioSrcType = string;

export type UseAudioStateType = "initial" | "ready" | "playing" | "paused";

export function useAudio(src: UseAudioSrcType) {
  const [state, setState] = React.useState<UseAudioStateType>("initial");

  const ref = React.useRef<HTMLAudioElement | null>(null);

  const duration = useField<number>(0);
  const currentTime = useField<number>(0);
  const volume = useField<number>(AUDIO_DEFAULT_VOLUME);

  const muted = volume.value === 0;

  const percentage =
    duration.value === 0
      ? 0
      : Math.round((currentTime.value / duration.value) * 100);

  function play() {
    if (ref.current) {
      ref.current.play();
      setState("playing");
    }
  }

  function pause() {
    if (ref.current) {
      ref.current.pause();
      setState("paused");
    }
  }

  function reset() {
    if (ref.current) {
      ref.current.currentTime = 0;
      ref.current.pause();
      currentTime.set(0);
      setState("paused");
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
    setState("ready");
  }

  function onTimeUpdate(event: Event) {
    const target = event.target as HTMLAudioElement;
    currentTime.set(Math.round(target.currentTime));
  }

  function onEnded() {
    setState("paused");
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
      },
      volume: { min: 0, max: 1, value: volume.value, onInput: changeVolume },
    },
    actions: { play, pause, mute, unmute, reset, seek, changeVolume },
    meta: {
      state,
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
