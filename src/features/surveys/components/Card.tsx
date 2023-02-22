import React, { useState, useRef } from "react";
import { Form } from "react-bootstrap";
import MSelect from "../../../components/MSelect";
import CloseIcon from "@mui/icons-material/Close";

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

  const [multipleOptions, setMultipleOptions] = useState<
    { [key: string]: any }[]
  >([
    {
      id: 1,
      value: "",
    },
  ]);

  function addOptions(e: React.MouseEvent) {
    e.preventDefault();
    setMultipleOptions((c) => {
      const newOptions = [...c];
      newOptions.push({
        id: newOptions.length + 1,
        value: "",
      });
      return newOptions;
    });
  }

  console.log(multipleOptions);

  function handleRemoveOption(e: React.MouseEvent, index: number) {
    e.preventDefault();
    setMultipleOptions((c) => {
      const newOptions = [...c];
      newOptions.splice(index, 1);
      return newOptions;
    });
  }

  function handleInputChange(index: number, value: string) {
    setMultipleOptions((c) => {
      const newOptions = [...c];
      newOptions[index].value = value;
      return newOptions;
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
          {multipleOptions.map((option, i) => (
            <div
              className="d-flex flex-row align-items-center justify-content-between mb-3"
              key={i}
            >
              <Form.Check
                type="radio"
                label={
                  <input
                    type="text"
                    className="basic-text-input"
                    key={option.id}
                    defaultValue={option.value}
                    onBlur={(e) => handleInputChange(i, e.target.value)}
                  />
                }
                id={`radio-${i + 1}`}
                name="group1"
                className="my-0 w-50"
              />
              <button
                className="empty-button p-0"
                onClick={(e) => handleRemoveOption(e, i)}
              >
                <CloseIcon />
              </button>
            </div>
          ))}
          <Form.Check
            type="radio"
            disabled
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
