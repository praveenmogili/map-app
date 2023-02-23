interface CardTypeInterface {
  readonly id: string;
  readonly label: string;
  readonly hidden: boolean;
}

export const CARD_TYPES: readonly CardTypeInterface[] = Object.freeze([
  Object.freeze({ id: "string", label: "Short string", hidden: false }),
  Object.freeze({ id: "paragraph", label: "Paragraph", hidden: false }),
  Object.freeze({ id: "number", label: "Number", hidden: false }),
  Object.freeze({ id: "password", label: "Password", hidden: false }),
  Object.freeze({ id: "radio", label: "Radio", hidden: false }),
  Object.freeze({ id: "checkbox", label: "Checkbox", hidden: false }),
  Object.freeze({ id: "dropdown", label: "Dropdown", hidden: false }),
  Object.freeze({ id: "date", label: "Date", hidden: false }),
  Object.freeze({ id: "time", label: "Time", hidden: false }),
  Object.freeze({ id: "array", label: "Array", hidden: false }),
  Object.freeze({
    id: "title-description",
    label: "Title and description",
    hidden: false,
  }),
  Object.freeze({
    id: "section-header",
    label: "Section header",
    hidden: true,
  }),
]);
