import AllSurveys from "./AllSurveys";
import React from "react";
import { MH1TitleBar, MSteps, MSidepanelAndContent } from "../../components";

const Surveys = () => {
  return (
    <div id="surveys-main">
      <MH1TitleBar title="Surveys" />
      <AllSurveys />
    </div>
  );
};

export default Surveys;
