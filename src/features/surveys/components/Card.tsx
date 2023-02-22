import React, { useState, useRef } from "react";
import { Form, Col, Row } from "react-bootstrap";
import MSelect from "../../../components/MSelect";
import CloseIcon from "@mui/icons-material/Close";

interface CardProps {
  title?: string;
  subtitle?: string;
  cardType?: string;
}

const CARD_TYPES = [
  { id: "string", label: "Short string" },
  { id: "paragraph", label: "Paragraph" },
  { id: "number", label: "Number" },
  { id: "password", label: "Password" },
  { id: "radio", label: "Radio" },
  { id: "checkbox", label: "Checkbox" },
  { id: "dropdown", label: "Dropdown" },
  { id: "date", label: "Date" },
  { id: "time", label: "Time" },
  { id: "array", label: "Array" },
  { id: "title-description", label: "Title and description" },
];

interface CardInputProps {
  cardType?: string;
  setCardValue?: (value: string | object) => void;
}

const CardInput = (props: CardInputProps) => {
  const { cardType } = props;

  const [multipleOptions, setMultipleOptions] = useState<
    { id: string; label: string; isSelected: boolean }[]
  >([
    {
      id: `1-${Math.floor(Math.random() * 10000)}`,
      label: "",
      isSelected: false,
    },
  ]);

  function addOptions(e: React.MouseEvent) {
    e.preventDefault();
    setMultipleOptions((c) => {
      const newOptions = [...c];
      newOptions.push({
        id: `${newOptions.length + 1}-${Math.floor(Math.random() * 10000)}`,
        label: "",
        isSelected: false,
      });
      return newOptions;
    });
  }

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
      newOptions[index].label = value;
      return newOptions;
    });
  }

  function handleCheckboxSelection(
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) {
    setMultipleOptions((c) => {
      const newOptions = [...c];
      newOptions[index].isSelected = e.target.checked;
      return newOptions;
    });
  }

  const DropdownFormControl = () => (
    <>
      {multipleOptions.map((option, i) => (
        <div
          className="d-flex flex-row align-items-center justify-content-between mb-3"
          key={i}
        >
          <div className="d-flex flex-row align-items-center w-50">
            <p className="my-0 mx-2">{i + 1}.</p>
            <Form.Control
              type="text"
              className="basic-text-input"
              key={option.id}
              defaultValue={option.label}
              onBlur={(e) => handleInputChange(i, e.target.value)}
            />
          </div>
          <button
            className="empty-button p-0"
            onClick={(e) => handleRemoveOption(e, i)}
          >
            <CloseIcon />
          </button>
        </div>
      ))}
      <Form.Check name="group1">
        <Form.Check.Label>
          <button
            className="empty-button add-option p-0"
            onClick={(e) => addOptions(e)}
          >
            Add option
          </button>
        </Form.Check.Label>
      </Form.Check>
    </>
  );

  const CheckRadioFormControl = (is_radio: boolean) => (
    <>
      {multipleOptions.map((option, i) => (
        <div
          className="d-flex flex-row align-items-center justify-content-between mb-3"
          key={i}
        >
          <Form.Check className="my-0 w-50">
            <Form.Check.Input
              name="group1"
              type={is_radio ? "radio" : "checkbox"}
              checked={option.isSelected}
              onChange={(e) => handleCheckboxSelection(e, i)}
            />
            <Form.Check.Label>
              <Form.Control
                type="text"
                className="basic-text-input"
                key={option.id}
                defaultValue={option.label}
                onBlur={(e) => handleInputChange(i, e.target.value)}
              />
            </Form.Check.Label>
          </Form.Check>
          <button
            className="empty-button p-0"
            onClick={(e) => handleRemoveOption(e, i)}
          >
            <CloseIcon />
          </button>
        </div>
      ))}
      <Form.Check name="group1">
        <Form.Check.Input type={is_radio ? "radio" : "checkbox"} disabled />
        <Form.Check.Label>
          <button
            className="empty-button add-option p-0"
            onClick={(e) => addOptions(e)}
          >
            Add option
          </button>
        </Form.Check.Label>
      </Form.Check>
    </>
  );

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
      formControl = CheckRadioFormControl(true);
      break;
    case "Checkbox":
      formControl = CheckRadioFormControl(false);
      break;
    case "Dropdown":
      formControl = DropdownFormControl();
      break;
    default:
      return <></>;
  }
  return formControl;
};

const Card = (props: CardProps) => {
  const [cardType, setCardType] = useState<string>(
    props.cardType || "Dropdown"
  );
  const [title, setTitle] = useState<string>("Implementation Data");
  const [subtitle, setSubtitle] = useState<string>(
    "The implementation data description"
  );

  return (
    <div className="survey-card">
      <div className="d-flex flex-row justify-content-between align-items-center mb-3">
        <div>
          <Form.Label>
            <input
              type="text"
              className="input-available title"
              defaultValue={title}
              onBlur={(e) => setTitle(e.target.value)}
            />
            <input
              type="text"
              className="empty-input subtitle"
              defaultValue={subtitle}
              onBlur={(e) => setSubtitle(e.target.value)}
            />
          </Form.Label>
        </div>
        <MSelect
          options={CARD_TYPES.map((c) => c.label)}
          defaultValue={cardType}
          onChange={(e) => setCardType(e!.value)}
        />
      </div>
      <CardInput cardType={cardType} />
    </div>
  );
};

export default Card;
