import {
  act,
  fireEvent,
  render,
  renderHook,
  screen,
} from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { beforeEach, describe, expect, test, vi } from "vitest";
import { UseAudioState, useAudio } from "../hooks/use-audio";

describe("useAudio", () => {
  let mockAudio: HTMLAudioElement;

  beforeEach(() => {
    mockAudio = {
      play: vi.fn(),
      pause: vi.fn(),
      currentTime: 0,
      duration: 100,
      volume: 1,
    } as unknown as HTMLAudioElement;

    vi.spyOn(HTMLAudioElement.prototype, "play").mockImplementation(() =>
      Promise.resolve()
    );
    vi.spyOn(HTMLAudioElement.prototype, "pause").mockImplementation(() => {});

    vi.spyOn(window, "Audio").mockImplementation(() => mockAudio);
  });

  test("initial state", () => {
    const { result } = renderHook(
      () => useAudio({ id: "audio", src: "test.mp3" }),
      { wrapper: createWrapper() }
    );

    expect(result.current.meta.state).toBe(UseAudioState.initial);
    expect(result.current.meta.isInitial).toBe(true);
    expect(result.current.meta.currentTime.raw).toBe(0);
    expect(result.current.meta.duration.raw).toBe(0);
    expect(result.current.meta.volume.value).toBe(1);
    expect(result.current.meta.muted).toBe(false);
  });

  test("transitions to ready state on metadata load", () => {
    const { result } = renderHook(
      () => useAudio({ id: "audio", src: "test.mp3" }),
      { wrapper: createWrapper() }
    );

    act(() => {
      result.current.props.audio.onLoadedMetadata({
        currentTarget: {
          duration: 100,
          currentTime: 0,
          volume: 1,
        },
      } as unknown as Event);
    });

    expect(result.current.meta.state).toBe(UseAudioState.ready);
    expect(result.current.meta.isReady).toBe(true);
    expect(result.current.meta.duration.raw).toBe(100);
  });

  test("handles play/pause actions", () => {
    const { result } = renderHook(
      () => useAudio({ id: "audio", src: "test.mp3" }),
      { wrapper: createWrapper() }
    );

    act(() => {
      result.current.props.audio.onLoadedMetadata({
        currentTarget: mockAudio,
      } as unknown as Event);
    });

    act(() => result.current.actions.play());

    expect(result.current.meta.state).toBe(UseAudioState.playing);
    expect(result.current.meta.isPlaying).toBe(true);

    act(() => result.current.actions.pause());

    expect(result.current.meta.state).toBe(UseAudioState.paused);
    expect(result.current.meta.isPaused).toBe(true);
  });

  test("handles volume changes and mute/unmute", () => {
    const { result } = renderHook(
      () => useAudio({ id: "audio", src: "test.mp3" }),
      { wrapper: createWrapper() }
    );

    act(() => {
      result.current.props.audio.onLoadedMetadata({
        currentTarget: mockAudio,
      } as unknown as Event);
    });

    act(() => {
      result.current.actions.changeVolume({
        currentTarget: { valueAsNumber: 0.5 },
      } as unknown as Event);
    });

    expect(result.current.meta.volume.value).toBe(0.5);
    expect(result.current.meta.volume.formatted).toBe("50%");

    act(() => result.current.actions.mute());

    expect(result.current.meta.muted).toBe(true);
    expect(result.current.meta.volume.value).toBe(0);

    act(() => result.current.actions.unmute());

    expect(result.current.meta.muted).toBe(false);
    expect(result.current.meta.volume.value).toBe(1);
  });

  test("handles seeking", () => {
    const { result } = renderHook(
      () => useAudio({ id: "audio", src: "test.mp3" }),
      { wrapper: createWrapper() }
    );

    act(() => {
      result.current.props.audio.onLoadedMetadata({
        currentTarget: mockAudio,
      } as unknown as Event);
    });

    act(() => {
      result.current.actions.seek({
        currentTarget: { valueAsNumber: 50 },
      } as unknown as Event);
    });

    expect(result.current.meta.currentTime.raw).toBe(50);
    expect(result.current.meta.percentage.raw).toBe(50);
  });

  test("handles reset action", () => {
    const { result } = renderHook(
      () => useAudio({ id: "audio", src: "test.mp3" }),
      { wrapper: createWrapper() }
    );

    act(() => {
      result.current.props.audio.onLoadedMetadata({
        currentTarget: mockAudio,
      } as unknown as Event);

      result.current.actions.seek({
        currentTarget: { valueAsNumber: 50 },
      } as unknown as Event);
    });

    act(() => result.current.actions.reset());

    expect(result.current.meta.currentTime.raw).toBe(0);
    expect(result.current.meta.state).toBe(UseAudioState.paused);
  });
});

describe("AudioPlayer component", () => {
  let mockAudio: HTMLAudioElement;

  beforeEach(() => {
    mockAudio = {
      play: vi.fn(),
      pause: vi.fn(),
      currentTime: 0,
      duration: 100,
      volume: 1,
    } as unknown as HTMLAudioElement;

    vi.spyOn(HTMLAudioElement.prototype, "play").mockImplementation(() =>
      Promise.resolve()
    );
    vi.spyOn(HTMLAudioElement.prototype, "pause").mockImplementation(() => {});
  });

  test("handles audio controls", () => {
    function AudioPlayer() {
      const audio = useAudio({ id: "audio", src: "test.mp3" });

      return (
        <div>
          {/* @ts-ignore */}
          <audio {...audio.props.audio} data-testid="audio" />

          <button
            type="button"
            onClick={
              audio.meta.isPlaying ? audio.actions.pause : audio.actions.play
            }
            aria-label={audio.meta.isPlaying ? "Pause" : "Play"}
          >
            {audio.meta.isPlaying ? "Pause" : "Play"}
          </button>

          {/* @ts-ignore */}
          <input type="range" {...audio.props.player} />

          <button
            type="button"
            onClick={
              audio.meta.muted ? audio.actions.unmute : audio.actions.mute
            }
            aria-label={audio.meta.muted ? "Unmute" : "Mute"}
          >
            {audio.meta.muted ? "Unmute" : "Mute"}
          </button>

          {/* @ts-ignore */}
          <input type="range" {...audio.props.volume} />
        </div>
      );
    }

    render(<AudioPlayer />, { wrapper: createWrapper() });

    // Initial metadata load
    const audioElement = screen.getByTestId("audio");
    act(() =>
      fireEvent(
        audioElement,
        new Event("loadedmetadata", {
          bubbles: true,
          // @ts-ignore
          currentTarget: mockAudio,
        })
      )
    );

    expect(audioElement).toHaveAttribute(
      "aria-label",
      "Audio player for test.mp3"
    );
    expect(audioElement).toHaveAttribute(
      "aria-describedby",
      "audio-description"
    );
    expect(audioElement).toHaveAttribute("role", "application");

    // Test play/pause
    const playButton = screen.getByRole("button", { name: "Play" });
    act(() => fireEvent.click(playButton));
    expect(screen.getByRole("button", { name: "Pause" })).toBeInTheDocument();

    act(() => fireEvent.click(screen.getByRole("button", { name: "Pause" })));
    expect(screen.getByRole("button", { name: "Play" })).toBeInTheDocument();

    // Test seeking
    const progress = screen.getByRole("slider", {
      name: "Seek audio position",
    });
    act(() => fireEvent.input(progress, { target: { valueAsNumber: 50 } }));

    expect(progress).toHaveAttribute("aria-valuemin", "0");
    expect(progress).toHaveAttribute("aria-valuenow", "50");

    // Test volume
    const volumeSlider = screen.getByRole("slider", { name: "Volume control" });
    act(() =>
      fireEvent.input(volumeSlider, { target: { valueAsNumber: 0.5 } })
    );
    expect(volumeSlider).toHaveAttribute("aria-valuemin", "0");
    expect(volumeSlider).toHaveAttribute("aria-valuemax", "1");
    expect(volumeSlider).toHaveAttribute("aria-valuenow", "0.5");
    expect(volumeSlider).toHaveAttribute("aria-valuetext", "Volume 50%");
    expect(volumeSlider).toHaveAttribute("role", "slider");

    const muteButton = screen.getByRole("button", { name: "Mute" });
    act(() => fireEvent.click(muteButton));
    expect(screen.getByRole("button", { name: "Unmute" })).toBeInTheDocument();
  });
});

function createWrapper() {
  // @ts-ignore
  return ({ children }) => (
    <MemoryRouter>
      <Routes>
        <Route path="/" element={children} />
      </Routes>
    </MemoryRouter>
  );
}
