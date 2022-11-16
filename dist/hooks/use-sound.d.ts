export declare type SoundSourceType = string;
export declare type UseSoundReturnType = {
    play: VoidFunction;
};
export declare function useSound(src: SoundSourceType): UseSoundReturnType;
