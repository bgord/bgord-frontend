import React from "react";
import { describe, it } from "vitest";
import { render, screen } from "@testing-library/react";

import { OutboundLink } from "../components/outbound-link";

const link = "https://google.com";
const text = "google link";

describe("outbound-link", () => {
  it("renders link with a text", () => {
    render(<OutboundLink href={link}>{text}</OutboundLink>);

    expect(screen.getByText(text)).toHaveAttribute("href", link);
    expect(screen.getByText(text)).toHaveAttribute("rel", "noreferer noopener");
    expect(screen.getByText(text)).toHaveAttribute("target", "_blank");
  });

  it("passes down data-* attributes", () => {
    render(
      <OutboundLink href={link} data-display="flex">
        {text}
      </OutboundLink>
    );

    expect(screen.getByText(text)).toHaveAttribute("data-display", "flex");
  });

  it("handles as prop correctly", () => {
    type CustomLinkProps = { href: string } & Record<string, unknown>;

    function CustomLink({ href, ...props }: CustomLinkProps) {
      return (
        <div>
          <a href={href} {...props}>
            {text}
          </a>
        </div>
      );
    }

    render(<OutboundLink as={CustomLink} href={link} data-display="flex" />);

    expect(screen.getByText(text)).toHaveAttribute("rel", "noreferer noopener");
    expect(screen.getByText(text)).toHaveAttribute("target", "_blank");
  });
});
