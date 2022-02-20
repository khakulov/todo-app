import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders TODO App text", () => {
  render(<App />);
  const linkElement = screen.getByText(/TODO App/i);
  expect(linkElement).toBeInTheDocument();
});
