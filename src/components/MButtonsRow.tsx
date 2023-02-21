import React from "react";
import { Button } from "react-bootstrap";

interface MButtonsRowProps {
  buttons: {
    variant?: string;
    type?: "button" | "submit" | "reset";
    onClick?: () => void;
    text: string;
  }[];
}

const MButtonsRow = (props: MButtonsRowProps) => {
  const { buttons } = props;
  return (
    <div className="d-flex flex-row flex-gap">
      {buttons.map((button) => (
        <Button
          variant={button.variant ?? "secondary"}
          type={button.type ?? "button"}
          onClick={button.onClick}
          key={button.text}
        >
          {button.text}
        </Button>
      ))}
    </div>
  );
};

export default MButtonsRow;
