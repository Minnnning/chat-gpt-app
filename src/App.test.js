import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
//const API_KEY = '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';
