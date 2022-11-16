export type SoundSourceType = string;

export type UseSoundReturnType = { play: VoidFunction };

export function useSound(src: SoundSourceType): UseSoundReturnType {
  const audio = new Audio(src);

  return { play: audio.play.bind(audio) };
}
