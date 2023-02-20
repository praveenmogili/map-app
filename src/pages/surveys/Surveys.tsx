import React from "react";
import { Form, Row, Col } from "react-bootstrap";
import { MH1TitleBar, MSteps } from "../../components";
import SurveyCard from "../../features/surveys/components/SurveyCard";
import AllSurveys from "./AllSurveys";
import EditSurvey from "./EditSurvey";
import SurveyResponses from "./SurveyResponses";
import { useNavigate } from "react-router-dom";
import MStepsAndContent from "../../components/MStepsAndContent";

const Surveys = () => {
  return (
    <div id="surveys-main">
      <MH1TitleBar title="Surveys" />
      <AllSurveys />
    </div>
  );
};

export default Surveys;
