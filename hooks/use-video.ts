import * as React from "react";

import { useField } from "./use-field";
import { DurationFormatter } from "../durations";

export type UseVideoSrcType = string;

type VideoDurationType = number;
type VideoCurrentTimeType = number;
type VideoVolumeType = number;

export const VIDEO_DEFAULT_VOLUME: VideoVolumeType = 1;

export enum UseVideoState {
  "initial" = "initial",
  "ready" = "ready",
  "playing" = "playing",
  "paused" = "paused",
}

export function useVideo(src: UseVideoSrcType) {
  const [state, setState] = React.useState<UseVideoState>(
    UseVideoState.initial
  );

  const ref = React.useRef<HTMLVideoElement | null>(null);

  const duration = useField<VideoDurationType>("duration", 0);
  const currentTime = useField<VideoCurrentTimeType>("currentTime", 0);
  const volume = useField<VideoVolumeType>("volume", VIDEO_DEFAULT_VOLUME);

  const muted = volume.value === 0;

  const percentage =
    duration.value === 0
      ? 0
      : Math.round((currentTime.value / duration.value) * 100);

  function play() {
    if (!ref.current) return;
    ref.current.play();
    setState(UseVideoState.playing);
  }

  function pause() {
    if (!ref.current) return;
    ref.current.pause();
    setState(UseVideoState.paused);
  }

  function reset() {
    if (!ref.current) return;
    ref.current.currentTime = 0;
    ref.current.pause();
    currentTime.set(0);
    setState(UseVideoState.paused);
  }

  function mute() {
    if (!ref.current) return;
    ref.current.volume = 0;
    volume.set(0);
  }

  function unmute() {
    if (!ref.current) return;
    ref.current.volume = VIDEO_DEFAULT_VOLUME;
    volume.set(VIDEO_DEFAULT_VOLUME);
  }

  function seek(event: Event) {
    const target = event.currentTarget as HTMLInputElement;

    if (!ref.current) return;
    ref.current.currentTime = target.valueAsNumber;
    currentTime.set(target.valueAsNumber);
  }

  function onLoadedMetadata(event: Event) {
    const target = event.currentTarget as HTMLVideoElement;

    ref.current = target;

    duration.set(Math.round(target.duration));
    currentTime.set(target.currentTime);
    volume.set(target.volume);
    setState(UseVideoState.ready);
  }

  function onTimeUpdate(event: Event) {
    const target = event.target as HTMLVideoElement;
    currentTime.set(Math.round(target.currentTime));
  }

  function onEnded() {
    setState(UseVideoState.paused);
  }

  function changeVolume(event: Event) {
    const target = event.currentTarget as HTMLInputElement;

    if (!ref.current) return;
    ref.current.volume = target.valueAsNumber;
    volume.set(target.valueAsNumber);
  }

  function triggerFullscreen() {
    if (!ref.current) return;
    ref.current.requestFullscreen();
  }

  return {
    props: {
      video: { src, onTimeUpdate, onLoadedMetadata, onEnded, controls: false },
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
      matches: (states: UseVideoState[]) =>
        states.some((given) => given === state),
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
