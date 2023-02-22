import React, { useState } from "react";
import { Form } from "react-bootstrap";
import MSelect from "../../../components/MSelect";

interface CardProps {
  title?: string;
  subtitle?: string;
}

const CARD_TYPES = [
  "Short string",
  "Paragraph",
  "Number",
  "Password",
  "Radio",
  "Checkbox",
  "Dropdown",
  "Date",
  "Time",
  "Array",
  "Title and description",
];

interface CardInputProps {
  cardType?: string;
  setCardValue?: (value: string | object) => void;
}

const CardInput = (props: CardInputProps) => {
  const { cardType } = props;
  const [multipleOptions, setMultipleOptions] = useState<{ label: string }[]>([
    {
      label: "Option 1",
    },
  ]);
  function addOptions(e: React.MouseEvent) {
    e.preventDefault();
    setMultipleOptions((c) => {
      c = [...c, { label: `Option ${c.length + 1}` }];
      return c;
    });
  }

  let formControl = <></>;

  switch (cardType) {
    case "Short string":
      formControl = (
        <Form.Control type="text" placeholder="Short answer text" />
      );
      break;
    case "Paragraph":
      formControl = (
        <Form.Control as="textarea" placeholder="Paragraph text" rows={4} />
      );
      break;
    case "Number":
      formControl = <Form.Control type="number" placeholder="Number" />;
      break;
    case "Password":
      formControl = <Form.Control type="password" placeholder="Password" />;
      break;
    case "Radio":
      formControl = (
        <>
          {multipleOptions.map((e, i) => (
            <Form.Check
              key={e.label + i}
              type="radio"
              label={e.label}
              id={`radio-${i + 1}`}
              name="group1"
            />
          ))}
          <Form.Check
            type="radio"
            label={
              <button
                className="empty-button add-option p-0"
                onClick={(e) => addOptions(e)}
              >
                Add option
              </button>
            }
            name="group1"
          />
        </>
      );
      break;
    default:
      return <></>;
  }
  return formControl;
};

const Card = (props: CardProps) => {
  const {
    title = "Implementation Data",
    subtitle = "The implementation data description",
  } = props;

  const [cardType, setCardType] = useState<string>("Radio");

  return (
    <div className="survey-card">
      <Form.Label className="d-flex flex-row justify-content-between align-items-center mb-3">
        <div>
          <p className="title m-0">{title}</p>
          <p className="subtitle m-0">{subtitle}</p>
        </div>
        <MSelect
          options={CARD_TYPES}
          defaultValue={cardType}
          onChange={(e) => setCardType(e!.value)}
        />
      </Form.Label>
      <CardInput cardType={cardType} />
    </div>
  );
};

export default Card;
