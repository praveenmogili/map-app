import React from "react";
import { Form, Row, Col } from "react-bootstrap";
import { H1TitleBar, MSteps } from "../../components";
import AllSurveys from "./AllSurveys";
import EditSurvey from "./EditSurvey";
import SurveyResponses from "./SurveyResponses";

const steps = [
  { name: "Step 1", onClick: () => {} },
  { name: "Step 2", onClick: () => {} },
  { name: "Step 3", onClick: () => {} },
];

const Surveys = () => {
  return (
    <div id="surveys">
      <H1TitleBar title="Surveys" />
      <div className="container-fluid px-4">
        <Row>
          <Col lg={2}>
            <MSteps steps={steps} />
          </Col>
          <Col>
            <SurveyResponses />
          </Col>
        </Row>
        {/* <EditSurvey /> */}
        {/* <AllSurveys /> */}
      </div>
    </div>
  );
};

export default Surveys;
