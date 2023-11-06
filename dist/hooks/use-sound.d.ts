export type SoundSourceType = string;
export type UseSoundReturnType = {
    play: VoidFunction;
};
export declare function useSound(src: SoundSourceType): UseSoundReturnType;
