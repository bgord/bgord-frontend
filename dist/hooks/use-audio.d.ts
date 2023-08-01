export declare type UseAudioSrcType = string;
declare type AudioDurationType = number;
declare type AudioCurrentTimeType = number;
declare type AudioVolumeType = number;
export declare const AUDIO_DEFAULT_VOLUME: AudioVolumeType;
export declare enum UseAudioState {
    "initial" = "initial",
    "ready" = "ready",
    "playing" = "playing",
    "paused" = "paused"
}
export declare type UseAudioReturnType = {
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
            style: {
                "--percentage": string;
            };
        };
        volume: {
            min: 0;
            max: 1;
            value: AudioVolumeType;
            onInput: (event: Event) => void;
            style: {
                "--percentage": string;
            };
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
export declare function useAudio(src: UseAudioSrcType): UseAudioReturnType;
export {};
