import React from "react";
import { H1TitleBar } from "../../components";
import AllSurveys from "./AllSurveys";
import EditSurvey from "./EditSurvey";

const Surveys = () => {
  return (
    <div id="surveys">
      <H1TitleBar title="Surveys" />
      <div className="container">
        <EditSurvey />
      </div>
    </div>
  );
};

export default Surveys;
