interface CardTypeInterface {
  readonly id: string;
  readonly label: string;
}

export const CARD_TYPES: readonly CardTypeInterface[] = Object.freeze([
  Object.freeze({ id: "string", label: "Short string" }),
  Object.freeze({ id: "paragraph", label: "Paragraph" }),
  Object.freeze({ id: "number", label: "Number" }),
  Object.freeze({ id: "password", label: "Password" }),
  Object.freeze({ id: "radio", label: "Radio" }),
  Object.freeze({ id: "checkbox", label: "Checkbox" }),
  Object.freeze({ id: "dropdown", label: "Dropdown" }),
  Object.freeze({ id: "date", label: "Date" }),
  Object.freeze({ id: "time", label: "Time" }),
  Object.freeze({ id: "array", label: "Array" }),
  Object.freeze({
    id: "title-description",
    label: "Title and description",
  }),
]);
