export declare const AUDIO_DEFAULT_VOLUME = 1;
export declare type UseAudioSrcType = string;
export declare function useAudio(src: UseAudioSrcType): {
    props: {
        audio: {
            src: string;
            onTimeUpdate: (event: Event) => void;
            onLoadedMetadata: (event: Event) => void;
            controls: boolean;
        };
        player: {
            min: number;
            step: number;
            max: number;
            value: number;
            onInput: (event: Event) => void;
        };
        volume: {
            min: number;
            max: number;
            value: number;
            onInput: (event: Event) => void;
        };
    };
    actions: {
        play: () => void;
        pause: () => void;
        mute: () => void;
        unmute: () => void;
        reset: () => void;
        seek: (event: Event) => void;
        changeVolume: (event: Event) => void;
    };
    meta: {
        currentTime: {
            raw: number;
            formatted: string;
        };
        duration: {
            raw: number;
            formatted: string;
        };
        volume: {
            raw: number;
            formatted: number;
        };
        muted: boolean;
    };
};
