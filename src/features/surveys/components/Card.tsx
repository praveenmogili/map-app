import React from "react";
import MSelect from "../../../components/MSelect";

interface CardProps {
  title?: string;
  subtitle?: string;
}

const CARD_TYPES = [
  "Short string",
]

const Card = (props: CardProps) => {
  const {
    title = "Implementation Data",
    subtitle = "The implementation data description",
  } = props;
  return (
    <div className="card">
      <div className="d-flex flex-row justify-content-between align-items-center mb-3">
        <div>
          <p className="title m-0">{title}</p>
          <p className="subtitle m-0">{subtitle}</p>
        </div>
        <MSelect />
      </div>
      <input type="text" placeholder="Short answer text" />
    </div>
  );
};

export default Card;
