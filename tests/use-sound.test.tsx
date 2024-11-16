import { fireEvent, renderHook, render } from "@testing-library/react";
import { describe, test, expect, vi, beforeEach, afterEach } from "vitest";
import { useSound } from "../hooks/use-sound";

describe("useSound", () => {
  // Mock for audio.play method
  const mockPlay = vi.fn();

  // Mock Audio constructor
  const mockAudio = vi.fn(() => ({
    play: mockPlay,
  }));

  beforeEach(() => {
    // Setup global Audio mock
    global.Audio = mockAudio as unknown as typeof Audio;
  });

  afterEach(() => {
    // Clear all mocks after each test
    vi.clearAllMocks();
  });

  test("initializes with audio source", () => {
    const source = "test-sound.mp3";
    renderHook(() => useSound(source));

    // Should create Audio with correct source
    expect(mockAudio).toHaveBeenCalledTimes(1);
    expect(mockAudio).toHaveBeenCalledWith(source);
  });

  test("returns play function", () => {
    const { result } = renderHook(() => useSound("test-sound.mp3"));

    // Should return object with play function
    expect(result.current).toHaveProperty("play");
    expect(typeof result.current.play).toBe("function");
  });

  test("play function calls audio.play", () => {
    const { result } = renderHook(() => useSound("test-sound.mp3"));

    // Call play function
    result.current.play();

    // Should call audio.play
    expect(mockPlay).toHaveBeenCalledTimes(1);
  });

  test("creates new Audio instance for each hook call", () => {
    const source1 = "sound1.mp3";
    const source2 = "sound2.mp3";

    renderHook(() => useSound(source1));
    renderHook(() => useSound(source2));

    // Should create two different Audio instances
    expect(mockAudio).toHaveBeenCalledTimes(2);
    expect(mockAudio).toHaveBeenNthCalledWith(1, source1);
    expect(mockAudio).toHaveBeenNthCalledWith(2, source2);
  });

  test("handles empty source", () => {
    expect(() => {
      renderHook(() => useSound(""));
    }).not.toThrow();

    // Should still create Audio instance
    expect(mockAudio).toHaveBeenCalledWith("");
  });

  test('play function maintains correct "this" binding', () => {
    const { result } = renderHook(() => useSound("test-sound.mp3"));

    // Store play function in variable (simulating real usage)
    const { play } = result.current;

    // Call play function directly
    play();

    // Should still call audio.play
    expect(mockPlay).toHaveBeenCalledTimes(1);
  });

  test("handles play errors gracefully", () => {
    // Mock play to throw error
    mockPlay.mockRejectedValueOnce(new Error("Play failed"));

    const { result } = renderHook(() => useSound("test-sound.mp3"));

    // Should not throw when calling play
    expect(() => result.current.play()).not.toThrow();
  });

  test("handles invalid source gracefully", () => {
    const invalidSource = {} as string;

    expect(() => renderHook(() => useSound(invalidSource))).not.toThrow();
  });

  test("audio instance is created only once per render", () => {
    const { result } = renderHook(() => useSound("test-sound.mp3"));

    // Call play multiple times
    result.current.play();
    result.current.play();
    result.current.play();

    // Should create Audio only once
    expect(mockAudio).toHaveBeenCalledTimes(1);
  });

  test("works with different audio formats", () => {
    const audioFormats = [
      "test.mp3",
      "test.wav",
      "test.ogg",
      "test.m4a",
      "https://example.com/audio.mp3",
    ];

    audioFormats.forEach((format) => {
      renderHook(() => useSound(format));
      expect(mockAudio).toHaveBeenCalledWith(format);
    });
  });

  describe("useSound in components", () => {
    test("plays sound on button click", () => {
      function TestComponent() {
        const { play } = useSound("test-sound.mp3");
        return (
          <button type="button" onClick={play} data-testid="sound-button">
            Play Sound
          </button>
        );
      }

      const { getByTestId } = render(<TestComponent />);
      const button = getByTestId("sound-button");

      // Verify initial state
      expect(mockPlay).not.toHaveBeenCalled();

      // Trigger sound
      fireEvent.click(button);
      expect(mockPlay).toHaveBeenCalledTimes(1);

      // Multiple clicks should trigger multiple plays
      fireEvent.click(button);
      fireEvent.click(button);
      expect(mockPlay).toHaveBeenCalledTimes(3);
    });

    test("handles multiple sound instances in component", () => {
      function TestComponent() {
        const sound1 = useSound("sound1.mp3");
        const sound2 = useSound("sound2.mp3");

        return (
          <div>
            <button
              type="button"
              onClick={sound1.play}
              data-testid="sound1-button"
            >
              Play Sound 1
            </button>
            <button
              type="button"
              onClick={sound2.play}
              data-testid="sound2-button"
            >
              Play Sound 2
            </button>
          </div>
        );
      }

      const { getByTestId } = render(<TestComponent />);

      // Should create two different Audio instances
      expect(mockAudio).toHaveBeenCalledTimes(2);
      expect(mockAudio).toHaveBeenNthCalledWith(1, "sound1.mp3");
      expect(mockAudio).toHaveBeenNthCalledWith(2, "sound2.mp3");

      // Test individual buttons
      fireEvent.click(getByTestId("sound1-button"));
      fireEvent.click(getByTestId("sound2-button"));

      expect(mockPlay).toHaveBeenCalledTimes(2);
    });
  });
});
