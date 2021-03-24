import React from "react";
import { render, screen } from "@testing-library/react";
import Order from ".";

describe("Order component", () => {
  it("Show order", () => {
    const item = {
      id: 1,
      flavor: "MARGUERITA",
      size: "M",
      timestamp: "2021-03-24T09:08:12.9529721-03:00",
    };
    render(<Order item={item} />);

    const size = screen.getByTestId("order-size");
    const flavor = screen.getByTestId("order-flavor");
    const timestamp = screen.getByTestId("order-timestamp");

    expect(flavor.textContent).toBe("MARGUERITA");
    expect(size.textContent).toBe("M");
    expect(timestamp.textContent).toBe("09:08:12");
  });
});
