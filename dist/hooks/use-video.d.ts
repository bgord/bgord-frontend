export declare type UseVideoSrcType = string;
declare type VideoVolumeType = number;
export declare const VIDEO_DEFAULT_VOLUME: VideoVolumeType;
export declare enum UseVideoState {
    "initial" = "initial",
    "ready" = "ready",
    "playing" = "playing",
    "paused" = "paused"
}
export declare function useVideo(src: UseVideoSrcType): {
    props: {
        video: {
            src: string;
            onTimeUpdate: (event: Event) => void;
            onLoadedMetadata: (event: Event) => void;
            onEnded: () => void;
            controls: boolean;
        };
        player: {
            min: number;
            step: number;
            max: number;
            value: number;
            onInput: (event: Event) => void;
            style: {
                "--percentage": string;
            };
        };
        volume: {
            min: number;
            max: number;
            value: number;
            onInput: (event: Event) => void;
            style: {
                "--percentage": string;
            };
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
        triggerFullscreen: () => void;
    };
    meta: {
        state: UseVideoState;
        isInitial: boolean;
        isReady: boolean;
        isPlaying: boolean;
        isPaused: boolean;
        matches: (states: UseVideoState[]) => boolean;
        percentage: {
            raw: number;
            formatted: string;
        };
        currentTime: {
            raw: number;
            formatted: string;
        };
        duration: {
            raw: number;
            formatted: string;
        };
        volume: {
            value: number;
            raw: number;
            formatted: string;
        };
        muted: boolean;
    };
};
export {};
