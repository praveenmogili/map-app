import React from "react";
import { Form, Row, Col } from "react-bootstrap";
import { MH1TitleBar, MSteps } from "../../components";
import SurveyCard from "../../features/surveys/components/SurveyCard";
import AllSurveys from "./AllSurveys";
import EditSurvey from "./EditSurvey";
import SurveyResponses from "./SurveyResponses";
import { useNavigate } from "react-router-dom";

const Surveys = () => {
  const navigate = useNavigate();
  return (
    <div id="surveys">
      <MH1TitleBar title="Surveys" />
      <div className="container-fluid px-4">
        <Row>
          <Col lg={2}>
            <MSteps />
          </Col>
          <Col>
            <AllSurveys />
            <SurveyResponses />
            <SurveyCard />
          </Col>
        </Row>
        <EditSurvey />
      </div>
    </div>
  );
};

export default Surveys;
