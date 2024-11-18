import { render, renderHook } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { describe, expect, test, vi } from "vitest";
import { PagedMetaType, extractPage, usePagination } from "../hooks/use-pagination";

describe("usePagination", () => {
  beforeEach(() => vi.clearAllMocks());

  test("handles null meta", () => {
    const { result } = renderHook(() => usePagination(null), {
      wrapper: createWrapper(),
    });

    expect(result.current).toEqual({
      current: 1,
      last: 1,
      controls: {
        firstPage: {
          active: true,
          disabled: false,
          exists: true,
          go: expect.any(Function),
          value: 1,
        },
        previousPage: {
          active: false,
          disabled: true,
          exists: false,
          go: expect.any(Function),
          value: undefined,
        },
        nextPage: {
          active: false,
          disabled: true,
          exists: false,
          go: expect.any(Function),
          value: undefined,
        },
        lastPage: {
          active: true,
          disabled: true,
          exists: true,
          go: expect.any(Function),
          value: 1,
        },
      },
    });
  });

  test("handles middle page state", () => {
    const meta: PagedMetaType = {
      currentPage: 2,
      previousPage: 1,
      nextPage: 3,
      lastPage: 3,
      exhausted: false,
      total: 30,
    };

    const { result } = renderHook(() => usePagination(meta), {
      wrapper: createWrapper(),
    });

    expect(result.current.current).toBe(2);
    expect(result.current.controls.previousPage.exists).toBe(true);
    expect(result.current.controls.nextPage.exists).toBe(true);
    expect(result.current.controls.previousPage.disabled).toBe(false);
    expect(result.current.controls.nextPage.disabled).toBe(false);
  });

  test("handles first page state", () => {
    const meta = {
      currentPage: 1,
      previousPage: undefined,
      nextPage: 2,
      lastPage: 3,
      exhausted: false,
      total: 30,
    };

    const { result } = renderHook(() => usePagination(meta), {
      wrapper: createWrapper(),
    });

    expect(result.current.controls.firstPage.active).toBe(true);
    expect(result.current.controls.previousPage.disabled).toBe(true);
    expect(result.current.controls.nextPage.disabled).toBe(false);
  });

  test("handles last page state", () => {
    const meta = {
      currentPage: 3,
      previousPage: 2,
      nextPage: undefined,
      lastPage: 3,
      exhausted: false,
      total: 30,
    };

    const { result } = renderHook(() => usePagination(meta), {
      wrapper: createWrapper(),
    });

    expect(result.current.controls.lastPage.active).toBe(true);
    expect(result.current.controls.nextPage.disabled).toBe(true);
    expect(result.current.controls.previousPage.disabled).toBe(false);
  });

  test("control actions set correct page numbers", () => {
    const meta = {
      currentPage: 2,
      previousPage: 1,
      nextPage: 3,
      lastPage: 3,
      exhausted: false,
      total: 30,
    };

    const { result } = renderHook(() => usePagination(meta), {
      wrapper: createWrapper(),
    });

    result.current.controls.firstPage.go();

    result.current.controls.nextPage.go();

    result.current.controls.previousPage.go();

    result.current.controls.lastPage.go();
  });
});

describe("extractPage", () => {
  test("extracts page number from URL", () => {
    const url = new URL("http://example.com?page=2");
    expect(extractPage(url)).toBe(2);
  });

  test("returns 1 when no page parameter", () => {
    const url = new URL("http://example.com");
    expect(extractPage(url)).toBe(1);
  });

  test("returns 1 for invalid page parameter", () => {
    const url = new URL("http://example.com?page=invalid");
    expect(extractPage(url)).toBe(1);
  });
});

// Integration test with a Pagination component
function PaginationControls({ meta }: { meta: PagedMetaType | null }) {
  const pagination = usePagination(meta);

  return (
    <div>
      <button
        type="button"
        onClick={pagination.controls.firstPage.go}
        disabled={pagination.controls.firstPage.disabled}
        data-testid="first-page"
      >
        First
      </button>
      <button
        type="button"
        onClick={pagination.controls.previousPage.go}
        disabled={pagination.controls.previousPage.disabled}
        data-testid="prev-page"
      >
        Previous
      </button>
      <span data-testid="current-page">{pagination.current}</span>
      <button
        type="button"
        onClick={pagination.controls.nextPage.go}
        disabled={pagination.controls.nextPage.disabled}
        data-testid="next-page"
      >
        Next
      </button>
      <button
        type="button"
        onClick={pagination.controls.lastPage.go}
        disabled={pagination.controls.lastPage.disabled}
        data-testid="last-page"
      >
        Last
      </button>
    </div>
  );
}

describe("Pagination Integration", () => {
  test("renders pagination controls correctly", () => {
    const meta = {
      currentPage: 2,
      previousPage: 1,
      nextPage: 3,
      lastPage: 3,
      exhausted: false,
      total: 30,
    };

    const { getByTestId } = render(<PaginationControls meta={meta} />, {
      wrapper: createWrapper(),
    });

    expect(getByTestId("current-page")).toHaveTextContent("2");
    expect(getByTestId("prev-page")).not.toBeDisabled();
    expect(getByTestId("next-page")).not.toBeDisabled();
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
