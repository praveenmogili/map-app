import React from "react";
import MSelect from "../../../components/MSelect";

interface CardProps {
  title?: string;
  subtitle?: string;
}

const Card = (props: CardProps) => {
  const {
    title = "Implementation Data",
    subtitle = "The implementation data description",
  } = props;
  return (
    <div className="card ">
      <p className="title m-0">{title}</p>
      <p className="subtitle">{subtitle}</p>
      <input type="text" placeholder="Short answer text" />
      <MSelect />
    </div>
  );
};

export default Card;
