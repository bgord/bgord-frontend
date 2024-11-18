import { render, renderHook } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, test } from "vitest";
import { useDisablePullToRefresh } from "../hooks/use-disable-pull-to-refresh";

describe("useDisablePullToRefresh", () => {
  const html = document.querySelector("html") as HTMLElement;
  const body = document.body;

  beforeEach(() => {
    // Reset styles before each test
    html.style.overscrollBehavior = "";
    body.style.overscrollBehavior = "";
  });

  afterEach(() => {
    // Clean up styles after each test
    html.style.overscrollBehavior = "";
    body.style.overscrollBehavior = "";
  });

  test("disables pull to refresh when enabled", () => {
    renderHook(() => useDisablePullToRefresh(true));

    expect(html.style.overscrollBehavior).toEqual("none");
    expect(body.style.overscrollBehavior).toEqual("none");
  });

  test("does not disable pull to refresh when disabled", () => {
    const originalHtmlStyle = html.style.overscrollBehavior;
    const originalBodyStyle = body.style.overscrollBehavior;

    renderHook(() => useDisablePullToRefresh(false));

    expect(html.style.overscrollBehavior).toEqual(originalHtmlStyle);
    expect(body.style.overscrollBehavior).toEqual(originalBodyStyle);
  });
});

// Component Integration test
function ScrollableContent({ disablePullToRefresh = true }) {
  useDisablePullToRefresh(disablePullToRefresh);

  return (
    <div style={{ height: "200vh" }} data-testid="scrollable">
      Scrollable Content
    </div>
  );
}

describe("ScrollableContent Integration", () => {
  test("applies correct styles when mounted", () => {
    render(<ScrollableContent />);

    expect(document.querySelector("html")?.style.overscrollBehavior).toEqual("none");
    expect(document.body.style.overscrollBehavior).toEqual("none");
  });

  test("respects disablePullToRefresh prop", () => {
    const { rerender } = render(<ScrollableContent disablePullToRefresh={false} />);

    expect(document.querySelector("html")?.style.overscrollBehavior).not.toEqual("none");

    rerender(<ScrollableContent disablePullToRefresh={true} />);
    expect(document.querySelector("html")?.style.overscrollBehavior).toEqual("none");
  });
});
