import React from "react";
import MSelect from "../../../components/MSelect";

const SurveyCard = () => {
  return (
    <div className="card ">
      <p className="title m-0">Implementation Data</p>
      <p className="subtitle">The implementation data description</p>
      <input type="text" placeholder="Short answer text" />
      <MSelect />
    </div>
  );
};

export default SurveyCard;
