import React from "react";
import { describe, it } from "vitest";
import { render, screen } from "@testing-library/react";

import { OutboundLink } from "../components/outbound-link";

describe("outbound-link", () => {
  it("false to be false", () => {
    render(<OutboundLink href="https://google.com" />);

    screen.debug();
  });
});
