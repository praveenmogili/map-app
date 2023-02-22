import React from "react";
import { Form } from "react-bootstrap";
import {
  MH2TitleSubtitle,
  MSidepanelAndContent,
  MSteps,
} from "../../components";
import Card from "../../features/surveys/components/Card";
import SectionHeader from "../../features/surveys/components/SectionHeader";

const EditBlock = () => {
  const ppp = `We at Mythics, Inc. are committed to providing the best cloud computing solutions to meet our customers' needs. In order to better understand your specific requirements, we would like to invite you to participate in a short survey. 

The survey will take approximately 5 minutes to complete and will ask you about your current usage of cloud computing services, your future plans and expectations, and your level of satisfaction with your current provider. Your input is extremely valuable to us and will help us deliver the most relevant and effective solutions for you. 
  
Thank you for your time and support.`;

  return (
    <div
      id="surveys-edit-block"
      className="container-fluid px-4 survey-form-cards"
    >
      <MH2TitleSubtitle
        title="Survey Responses"
        subtitle="View and manage survey responses"
      />
      <Form>
        <h3 className="ms-2">Section 1</h3>
        <Card isSectionHeader />
        <Card />
        <Card defaultCardType="Radio" />
        <h3 className="ms-2">Section 2</h3>
        <Card isSectionHeader />
      </Form>
    </div>
  );
};

export default EditBlock;
