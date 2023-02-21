import { render, screen } from "@testing-library/react";
import App from "../App";
import { SurveyResponses } from "../pages/surveys";

test("test", () => {
  expect(1).toBe(1);
});

test("renders App page", () => {
  render(<App />);
  const title = screen.getAllByText(/Surveys/i);
  expect(title[0]).toBeInTheDocument();
});

test("renders Surveys Responses page", () => {
  render(<SurveyResponses />);
  const title = screen.getAllByText(/Survey Responses/i);
  expect(title[0]).toBeInTheDocument();
});
