export type UseVideoSrcType = string;
type VideoDurationType = number;
type VideoCurrentTimeType = number;
type VideoVolumeType = number;
export declare const VIDEO_DEFAULT_VOLUME: VideoVolumeType;
export declare enum UseVideoState {
    "initial" = "initial",
    "ready" = "ready",
    "playing" = "playing",
    "paused" = "paused"
}
export type UseVideoReturnType = {
    props: {
        video: {
            src: UseVideoSrcType;
            onTimeUpdate: (event: Event) => void;
            onLoadedMetadata: (event: Event) => void;
            onEnded: (event: Event) => void;
            controls: false;
        };
        player: {
            min: 0;
            step: 1;
            max: VideoDurationType;
            value: VideoDurationType;
            onInput: (event: Event) => void;
            style: {
                "--percentage": string;
            };
        };
        volume: {
            min: 0;
            max: 1;
            step: 0.01;
            value: VideoVolumeType;
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
        triggerFullscreen: VoidFunction;
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
            raw: VideoCurrentTimeType;
            formatted: string;
        };
        duration: {
            raw: VideoDurationType;
            formatted: string;
        };
        volume: {
            value: VideoVolumeType;
            raw: number;
            formatted: string;
        };
        muted: boolean;
    };
};
export declare function useVideo(src: UseVideoSrcType): UseVideoReturnType;
export {};
