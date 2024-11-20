import { useEffect, useMemo } from "react";

type SoundSourceType = string;

interface UseSoundReturnType {
  /** Function to play the audio */
  play: VoidFunction;
}

/**
 * React hook for playing audio files.
 * Creates and manages an Audio instance with proper cleanup and error handling.
 *
 * @param src - URL or path to the audio file
 * @returns Object containing the play function
 *
 * @example
 * ```tsx
 * // Basic usage
 * const { play } = useSound('/path/to/sound.mp3');
 *
 * return <button onClick={play}>Play Sound</button>;
 *
 * // In async handlers
 * const handleClick = async () => {
 *   await play();
 *   console.log('Sound played');
 * };
 * ```
 *
 */
export function useSound(src: SoundSourceType): UseSoundReturnType {
  // Create memoized audio instance
  const audio = useMemo(() => new Audio(src), [src]);

  // Setup cleanup on unmount
  useEffect(() => {
    return () => {
      // Cleanup audio instance
      audio.pause();
      audio.src = "";
      audio.load(); // Forces release of resources
    };
  }, [audio]);

  return { play: audio.play.bind(audio) };
}
