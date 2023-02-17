import React from "react";
import { Form, Button } from "react-bootstrap";
import { H2TitleSubtitle, MSmallDropdown } from "../../components";
import MAccessPermissions from "../../features/surveys/components/MAccessPermissions";
import MChooseSurveyTemplate from "../../features/surveys/components/MChooseSurveyTemplate";

const EditSurvey = () => {
  const survey_permissions = [
    {
      Name: "All employees",
      Permission: (
        <MSmallDropdown defaultOption="Read" otherOptions={["Write"]} />
      ),
    },
    {
      Name: "All managers",
      Permission: (
        <MSmallDropdown defaultOption="Read" otherOptions={["Write"]} />
      ),
    },
  ];

  return (
    <div id="edit-survey">
      <H2TitleSubtitle
        title="Edit survey"
        subtitle="Edit survey details for your customer"
      />
      <Form>
        <Form.Group controlId="formSurveyName">
          <Form.Label>Customer name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter customer name"
            className="mb-3"
          />

          <Form.Label>Customer email</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter customer email"
            className="mb-3"
          />

          <Form.Label>Survey name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter survey name"
            className="mb-3"
          />

          <Form.Label>Survey description</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter survey description"
            className="mb-3"
          />

          <Form.Label>Survey template</Form.Label>
          <div className="mb-3">
            <MChooseSurveyTemplate
              title="Lacks Valley Survey Template"
              subtitle="Tailored Survey for Lacks Valley Furniture"
              button1={<Button>Choose</Button>}
            />
          </div>

          <Form.Label>Access permissions</Form.Label>
          <div className="mb-4">
            <MAccessPermissions rows={survey_permissions} />
          </div>

          <div className="d-flex flex-row flex-gap">
            <Button variant="primary" type="submit">
              Submit
            </Button>
            <Button variant="secondary">Save draft</Button>
            <Button variant="secondary">Cancel</Button>
          </div>
        </Form.Group>
      </Form>
    </div>
  );
};

export default EditSurvey;
