import React, { useState, useRef } from "react";
import { Form, Col, Row } from "react-bootstrap";
import MSelect from "../../../components/MSelect";
import CloseIcon from "@mui/icons-material/Close";
import {
  createRandomId,
  changeObjectKeyName,
  deepCopyObj,
  deepCopyArrayObj,
} from "../../../utils/utils";
import { CARD_TYPES } from "../../../assets/constants/constSurveys";

interface CardProps {
  defaultCardTypeId?: string;
  isSectionHeader?: boolean;
}

// change key name 'id' to 'value' for CARD_TYPES to be used in MSelect
const cardTypesIdIsValue: { value: string; label: string; hidden: boolean }[] =
  changeObjectKeyName(deepCopyArrayObj(CARD_TYPES), "id", "value");
const cardTypesForMSelect: { value: string; label: string; hidden: boolean }[] =
  cardTypesIdIsValue.filter((c) => !c.hidden);

interface CardInputProps {
  cardTypeId?: string;
  setCardValue?: (value: string | object) => void;
  isSectionHeader?: boolean;
}

function findCardLabel(cardTypeId: string): string {
  const cardType = CARD_TYPES.find((c) => c.id === cardTypeId);
  return cardType!.label;
}

const CardInput = (props: CardInputProps) => {
  const { cardTypeId } = props;

  const [multipleOptions, setMultipleOptions] = useState<
    { id: string; label: string; isSelected: boolean }[]
  >([
    {
      id: `$card.${createRandomId()}`,
      label: "",
      isSelected: false,
    },
  ]);

  function addOptions(e: React.MouseEvent) {
    e.preventDefault();
    setMultipleOptions((c) => {
      const newOptions = [...c];
      newOptions.push({
        id: `card.${createRandomId()}`,
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

  const TitleDescriptionFormControl = () => (
    <Form.Control as="textarea" placeholder="A little explanation" rows={4} />
  );

  let formControl: JSX.Element = <></>;
  switch (cardTypeId) {
    case "string":
      formControl = (
        <Form.Control type="text" placeholder="Short answer text" />
      );
      break;
    case "paragraph":
      formControl = (
        <Form.Control as="textarea" placeholder="Paragraph text" rows={4} />
      );
      break;
    case "number":
      formControl = <Form.Control type="number" placeholder="Number" />;
      break;
    case "password":
      formControl = <Form.Control type="password" placeholder="Password" />;
      break;
    case "radio":
      formControl = CheckRadioFormControl(true);
      break;
    case "checkbox":
      formControl = CheckRadioFormControl(false);
      break;
    case "dropdown":
      formControl = DropdownFormControl();
      break;
    case "date":
      formControl = <Form.Control type="date" placeholder="Date" />;
      break;
    case "time":
      formControl = <Form.Control type="time" placeholder="Time" />;
      break;
    case "title-description":
      formControl = TitleDescriptionFormControl();
      break;
    case "array":
      formControl = <Card defaultCardTypeId="string" />;
      break;
    default:
      return <></>;
  }
  return formControl;
};

const Card = (props: CardProps) => {
  const { defaultCardTypeId = "string", isSectionHeader = false } = props;

  const [cardTypeId, setCardTypeId] = useState<string>(
    isSectionHeader ? "title-description" : defaultCardTypeId
  );
  const [title, setTitle] = useState<string>("Implementation Data");
  const [subtitle, setSubtitle] = useState<string>(
    "The implementation data description"
  );

  return (
    <div className={`survey-card ${isSectionHeader ? "section-header" : ""}`}>
      <div className="title-card-type d-flex flex-row justify-content-between align-items-center mb-3">
        <div className="title-description">
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
        {!isSectionHeader && (
          <MSelect
            fullOptions={cardTypesForMSelect}
            defaultValue={findCardLabel(cardTypeId)}
            onChange={(e) => setCardTypeId(e!.value)}
          />
        )}
      </div>
      {cardTypeId === "title-description" ? <hr className="short-sep" /> : null}
      <CardInput cardTypeId={cardTypeId} />
    </div>
  );
};

export default Card;
