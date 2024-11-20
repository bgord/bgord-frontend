import { fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { describe, expect, test } from "vitest";
import { useClientSort } from "../hooks/use-client-sort";

describe("useClientSort", () => {
  // Test data
  type Item = {
    id: number;
    name: string;
    date: string;
  };

  const items: Item[] = [
    { id: 1, name: "Alpha", date: "2024-01-01" },
    { id: 2, name: "Beta", date: "2024-01-02" },
    { id: 3, name: "Gamma", date: "2024-01-03" },
  ];

  // Example component using the hook
  function TestComponent() {
    const sort = useClientSort<Item>({
      name: "test-sort",
      enum: {
        default: "id",
        id: "id",
        name: "name",
        date: "date",
      },
      options: {
        id: (a, b) => a.id - b.id,
        name: (a, b) => a.name.localeCompare(b.name),
        date: (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime(),
      },
    });

    return (
      <div>
        <select data-testid="sort-select" value={sort.value} onChange={sort.handleChange}>
          {sort.options.map((option) => (
            <option key={option} value={option}>
              Sort by {option}
            </option>
          ))}
        </select>

        <ul>
          {[...items].sort(sort.sortFn).map((item) => (
            <li key={item.id} data-testid={`item-${item.id}`}>
              {item.name}
            </li>
          ))}
        </ul>
      </div>
    );
  }

  test("renders with default sort", () => {
    render(<TestComponent />, { wrapper: createWrapper() });

    const items = screen.getAllByTestId(/item-/);
    expect(items[0]).toHaveTextContent("Alpha");
    expect(items[1]).toHaveTextContent("Beta");
    expect(items[2]).toHaveTextContent("Gamma");
  });

  test("changes sort when option selected", async () => {
    render(<TestComponent />, { wrapper: createWrapper() });

    const select = screen.getByTestId("sort-select");

    // Sort by name
    fireEvent.change(select, { target: { value: "name" } });

    const itemsAfterSort = screen.getAllByTestId(/item-/);
    expect(itemsAfterSort[0]).toHaveTextContent("Alpha");
    expect(itemsAfterSort[1]).toHaveTextContent("Beta");
    expect(itemsAfterSort[2]).toHaveTextContent("Gamma");
  });

  test("uses default sort for invalid option", () => {
    render(<TestComponent />, { wrapper: createWrapper() });

    const select = screen.getByTestId("sort-select");
    fireEvent.change(select, { target: { value: "invalid" } });

    const items = screen.getAllByTestId(/item-/);
    // Should use default (id) sort
    expect(items[0]).toHaveTextContent("Alpha");
    expect(items[1]).toHaveTextContent("Beta");
    expect(items[2]).toHaveTextContent("Gamma");
  });

  test("maintains sort state", () => {
    const { rerender } = render(<TestComponent />, {
      wrapper: createWrapper(),
    });

    const select = screen.getByTestId("sort-select");
    fireEvent.change(select, { target: { value: "date" } });

    rerender(<TestComponent />);

    expect(select).toHaveValue("date");
    const items = screen.getAllByTestId(/item-/);
    expect(items[0]).toHaveTextContent("Alpha");
    expect(items[1]).toHaveTextContent("Beta");
    expect(items[2]).toHaveTextContent("Gamma");
  });

  test("provides correct sort options", () => {
    render(<TestComponent />, { wrapper: createWrapper() });

    const options = screen.getAllByRole("option");
    expect(options).toHaveLength(3);
    expect(options[0]).toHaveValue("id");
    expect(options[1]).toHaveValue("name");
    expect(options[2]).toHaveValue("date");
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
