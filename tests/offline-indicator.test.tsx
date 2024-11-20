import { render, screen } from "@testing-library/react";
import { describe, expect, test, vi } from "vitest";
import { OfflineIndicator } from "../components/offline-indicator";
import * as hooks from "../hooks";

// Mock the verified hooks
vi.mock("../hooks", () => ({ useIsOnline: vi.fn() }));

describe("OfflineIndicator", () => {
  test("renders nothing when online", () => {
    vi.mocked(hooks.useIsOnline).mockReturnValue(true);

    const { container } = render(
      <OfflineIndicator>
        <div data-testid="offline-content">Offline</div>
      </OfflineIndicator>
    );

    expect(container.innerHTML).toBe("");
    expect(screen.queryByTestId("offline-content")).not.toBeInTheDocument();
  });

  test("renders children when offline", () => {
    vi.mocked(hooks.useIsOnline).mockReturnValue(false);

    render(
      <OfflineIndicator>
        <div data-testid="offline-content">Offline</div>
      </OfflineIndicator>
    );

    expect(screen.getByTestId("offline-content")).toBeInTheDocument();
    expect(screen.getByText("Offline")).toBeInTheDocument();
  });

  test("renders complex children when offline", () => {
    vi.mocked(hooks.useIsOnline).mockReturnValue(false);

    render(
      <OfflineIndicator>
        <div data-testid="offline-wrapper">
          <h1>Offline Mode</h1>
          <p>You are currently offline</p>
        </div>
      </OfflineIndicator>
    );

    expect(screen.getByTestId("offline-wrapper")).toBeInTheDocument();
    expect(screen.getByText("Offline Mode")).toBeInTheDocument();
    expect(screen.getByText("You are currently offline")).toBeInTheDocument();
  });
});

// Component integration example
describe("OfflineIndicator Integration", () => {
  function NetworkStatus() {
    return (
      <div>
        <h1>Network Status</h1>
        <OfflineIndicator>
          <div data-testid="offline-banner">⚠️ You are offline</div>
        </OfflineIndicator>
      </div>
    );
  }

  test("shows and hides based on network status", () => {
    const { rerender } = render(<NetworkStatus />);

    // When online
    vi.mocked(hooks.useIsOnline).mockReturnValue(true);
    rerender(<NetworkStatus />);
    expect(screen.queryByTestId("offline-banner")).not.toBeInTheDocument();

    // When offline
    vi.mocked(hooks.useIsOnline).mockReturnValue(false);
    rerender(<NetworkStatus />);
    expect(screen.getByTestId("offline-banner")).toBeInTheDocument();
  });
});
