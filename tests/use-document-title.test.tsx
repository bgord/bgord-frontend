import { render, renderHook } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, test } from "vitest";
import { useDocumentTitle } from "../hooks/use-document-title";

describe("useDocumentTitle", () => {
  const originalTitle = document.title;

  beforeEach(() => {
    document.title = originalTitle;
  });

  afterEach(() => {
    document.title = originalTitle;
  });

  test("sets document title", () => {
    renderHook(() => useDocumentTitle("New Title"));
    expect(document.title).toBe("New Title");
  });

  test("updates title when prop changes", () => {
    const { rerender } = renderHook(
      (title: string) => useDocumentTitle(title),
      {
        initialProps: "Initial Title",
      },
    );

    expect(document.title).toBe("Initial Title");

    rerender("Updated Title");
    expect(document.title).toBe("Updated Title");
  });

  test("handles empty title", () => {
    renderHook(() => useDocumentTitle(""));
    expect(document.title).toBe("");
  });
});

function PageWithTitle({ title }: { title: string }) {
  useDocumentTitle(title);
  return <div>Page Content</div>;
}

describe("Document Title Component Integration", () => {
  test("sets and updates page title", () => {
    const { rerender } = render(<PageWithTitle title="Home Page" />);
    expect(document.title).toBe("Home Page");

    rerender(<PageWithTitle title="About Page" />);
    expect(document.title).toBe("About Page");
  });
});
