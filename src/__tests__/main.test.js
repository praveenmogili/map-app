import { render, screen } from "@testing-library/react";
import App from "../App";

test("test", () => {
  expect(1).toBe(1);
});

test("renders Surveys page", () => {
  render(<App />);
  const title = screen.getAllByText(/Surveys/i);
  expect(title[0]).toBeInTheDocument();
});
