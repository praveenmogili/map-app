import React from "react";
import { Col, Row } from "react-bootstrap";
import MSteps, { MStepsProps } from "./MSteps";

interface MStepsAndContentProps {
  steps?: MStepsProps["steps"];
  currentStep?: MStepsProps["current"];
  content?: React.ReactNode;
}

const MStepsAndContent = (props: MStepsAndContentProps) => {
  const { steps, currentStep, content } = props;
  return (
    <div className="container-fluid px-4">
      <Row>
        <Col lg={2}>
          <MSteps steps={steps} current={currentStep} />
        </Col>
        <Col>{content}</Col>
      </Row>
    </div>
  );
};

export default MStepsAndContent;
