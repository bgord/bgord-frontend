import { act, fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { beforeEach, describe, expect, test, vi } from "vitest";
import { useVideo } from "../hooks/use-video";

describe("VideoPlayer component", () => {
  let mockVideo: HTMLVideoElement;

  beforeEach(() => {
    mockVideo = {
      play: vi.fn(),
      pause: vi.fn(),
      currentTime: 0,
      duration: 100,
      volume: 1,
    } as unknown as HTMLVideoElement;

    // Mock methods
    vi.spyOn(HTMLVideoElement.prototype, "play").mockImplementation(() =>
      Promise.resolve(),
    );
    vi.spyOn(HTMLVideoElement.prototype, "pause").mockImplementation(() => {});

    // Mock requestFullscreen on the element level
    Object.defineProperty(mockVideo, "requestFullscreen", {
      value: vi.fn().mockImplementation(() => Promise.resolve()),
    });
  });

  test("handles video controls", () => {
    function VideoPlayer() {
      const video = useVideo("test.mp4");

      return (
        <div>
          {/* @ts-ignore */}
          <video data-testid="video" {...video.props.video} />

          <button
            type="button"
            onClick={
              video.meta.isPlaying ? video.actions.pause : video.actions.play
            }
            aria-label={video.meta.isPlaying ? "Pause" : "Play"}
          >
            {video.meta.isPlaying ? "Pause" : "Play"}
          </button>

          {/* @ts-ignore */}
          <input type="range" {...video.props.player} aria-label="Progress" />

          <button
            type="button"
            onClick={
              video.meta.muted ? video.actions.unmute : video.actions.mute
            }
            aria-label={video.meta.muted ? "Unmute" : "Mute"}
          >
            {video.meta.muted ? "Unmute" : "Mute"}
          </button>

          {/* @ts-ignore */}
          <input type="range" {...video.props.volume} aria-label="Volume" />
        </div>
      );
    }

    render(<VideoPlayer />, {
      wrapper: createWrapper(),
    });

    const videoElement = screen.getByTestId("video");
    act(() => {
      fireEvent(
        videoElement,
        new Event("loadedmetadata", {
          bubbles: true,
          // @ts-ignore
          currentTarget: mockVideo,
        }),
      );
    });

    // Test play/pause
    const playButton = screen.getByRole("button", { name: "Play" });
    act(() => {
      fireEvent.click(playButton);
    });
    expect(screen.getByRole("button", { name: "Pause" })).toBeInTheDocument();

    act(() => {
      fireEvent.click(screen.getByRole("button", { name: "Pause" }));
    });
    expect(screen.getByRole("button", { name: "Play" })).toBeInTheDocument();

    // Test seeking
    const progress = screen.getByRole("slider", { name: "Progress" });
    act(() => {
      fireEvent.input(progress, {
        target: { valueAsNumber: 50 },
      });
    });

    // Test volume
    const volumeSlider = screen.getByRole("slider", { name: "Volume" });
    act(() => {
      fireEvent.input(volumeSlider, {
        target: { valueAsNumber: 0.5 },
      });
    });

    const muteButton = screen.getByRole("button", { name: "Mute" });
    act(() => {
      fireEvent.click(muteButton);
    });
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
