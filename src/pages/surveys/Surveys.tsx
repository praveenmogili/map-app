import React from "react";
import { Form } from "react-bootstrap";
import { H1TitleBar } from "../../components";
import AllSurveys from "./AllSurveys";
import EditSurvey from "./EditSurvey";
import SurveyResponses from "./SurveyResponses";

const Surveys = () => {
  return (
    <div id="surveys">
      <H1TitleBar title="Surveys" />
      <div className="container">
        <SurveyResponses />
        {/* <EditSurvey /> */}
        {/* <AllSurveys /> */}
      </div>
    </div>
  );
};

export default Surveys;
