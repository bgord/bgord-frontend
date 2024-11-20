import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { describe, expect, test } from "vitest";
import { useClientSearch } from "../hooks/use-client-search";

describe("useClientSearch", () => {
  // Test data
  type Item = {
    id: number;
    name: string;
    description: string;
  };

  const items: Item[] = [
    { id: 1, name: "iPhone", description: "Apple smartphone" },
    { id: 2, name: "iPad", description: "Apple tablet" },
    { id: 3, name: "MacBook", description: "Apple laptop" },
    { id: 4, name: "Samsung Galaxy", description: "Android smartphone" },
  ];

  // Example component using the hook
  function TestComponent() {
    const search = useClientSearch({
      name: "product-search",
    });

    const filteredItems = items.filter(
      (item) => search.filterFn(item.name) || search.filterFn(item.description),
    );

    return (
      <div>
        <input
          type="search"
          data-testid="search-input"
          placeholder="Search products..."
          value={search.value}
          onChange={search.handleChange}
        />

        <ul>
          {filteredItems.map((item) => (
            <li key={item.id} data-testid={`item-${item.id}`}>
              <h3>{item.name}</h3>
              <p>{item.description}</p>
            </li>
          ))}
        </ul>

        <div data-testid="results-count">Found: {filteredItems.length}</div>
      </div>
    );
  }

  test("renders with empty search showing all items", () => {
    render(<TestComponent />, { wrapper: createWrapper() });

    const items = screen.getAllByTestId(/item-/);
    expect(items).toHaveLength(4);
  });

  test("filters items by name", async () => {
    render(<TestComponent />, { wrapper: createWrapper() });

    const searchInput = screen.getByTestId("search-input");
    fireEvent.change(searchInput, { target: { value: "phone" } });

    await waitFor(() => {
      const items = screen.getAllByTestId(/item-/);
      expect(items).toHaveLength(2);
      expect(items[0]).toHaveTextContent("iPhone");
      expect(items[1]).toHaveTextContent("Samsung Galaxy");
    });
  });

  test("filters items by description", async () => {
    render(<TestComponent />, { wrapper: createWrapper() });

    const searchInput = screen.getByTestId("search-input");
    fireEvent.change(searchInput, { target: { value: "android" } });

    await waitFor(() => {
      const items = screen.getAllByTestId(/item-/);
      expect(items).toHaveLength(1);
      expect(items[0]).toHaveTextContent("Samsung Galaxy");
    });
  });

  test("handles case-insensitive search", async () => {
    render(<TestComponent />, { wrapper: createWrapper() });

    const searchInput = screen.getByTestId("search-input");
    fireEvent.change(searchInput, { target: { value: "IPHONE" } });

    await waitFor(() => {
      const items = screen.getAllByTestId(/item-/);
      expect(items).toHaveLength(1);
      expect(items[0]).toHaveTextContent("iPhone");
    });
  });

  test("shows correct count of filtered results", async () => {
    render(<TestComponent />, { wrapper: createWrapper() });

    const searchInput = screen.getByTestId("search-input");
    const resultsCount = screen.getByTestId("results-count");

    // Initial state
    expect(resultsCount).toHaveTextContent("Found: 4");

    // After filtering
    fireEvent.change(searchInput, { target: { value: "apple" } });

    await waitFor(() => {
      expect(resultsCount).toHaveTextContent("Found: 3");
    });
  });

  test("handles empty results", async () => {
    render(<TestComponent />, { wrapper: createWrapper() });

    const searchInput = screen.getByTestId("search-input");
    fireEvent.change(searchInput, { target: { value: "nonexistent" } });

    await waitFor(() => {
      const items = screen.queryAllByTestId(/item-/);
      expect(items).toHaveLength(0);
      expect(screen.getByTestId("results-count")).toHaveTextContent("Found: 0");
    });
  });

  test("maintains search state on rerender", () => {
    const { rerender } = render(<TestComponent />, {
      wrapper: createWrapper(),
    });

    const searchInput = screen.getByTestId("search-input");
    fireEvent.change(searchInput, { target: { value: "phone" } });

    rerender(<TestComponent />);

    expect(searchInput).toHaveValue("phone");
    expect(screen.getAllByTestId(/item-/)).toHaveLength(2);
  });

  test("resets search with empty string", async () => {
    render(<TestComponent />, { wrapper: createWrapper() });

    const searchInput = screen.getByTestId("search-input");

    // First filter
    fireEvent.change(searchInput, { target: { value: "phone" } });

    await waitFor(() => {
      expect(screen.getAllByTestId(/item-/)).toHaveLength(2);
    });

    // Then reset
    fireEvent.change(searchInput, { target: { value: "" } });

    await waitFor(() => {
      expect(screen.getAllByTestId(/item-/)).toHaveLength(4);
    });
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
