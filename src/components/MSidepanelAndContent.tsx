import React from "react";
import { Col, Row } from "react-bootstrap";

interface MSidepanelAndContentProps {
  sidepanel: React.ReactNode;
  content: React.ReactNode;
}

const MSidepanelAndContent = (props: MSidepanelAndContentProps) => {
  const { content, sidepanel } = props;
  return (
    <div className="container-fluid px-4">
      <Row>
        <Col lg={2}>{sidepanel}</Col>
        <Col>{content}</Col>
      </Row>
    </div>
  );
};

export default MSidepanelAndContent;
