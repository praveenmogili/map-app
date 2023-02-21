import React from "react";
import { Form } from "react-bootstrap";
import { MButtonsRow, MH2TitleSubtitle, MSidepanelAndContent, MSteps } from "../../components";
import { useNavigate } from "react-router-dom";

const EditTemplate = () => {
  const navigate = useNavigate();
  const SurveyForm = (
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

        <MButtonsRow
          buttons={[
            {
              variant: "primary",
              type: "submit",
              text: "Submit",
              onClick: () => navigate("/surveys/templates"),
            },
            {
              text: "Save draft",
              onClick: () => navigate("/surveys/templates"),
            },
            {
              text: "Cancel",
              onClick: () => navigate("/surveys/templates"),
            },
          ]}
        />
      </Form.Group>
    </Form>
  );

  const Content = (
    <>
      <MH2TitleSubtitle
        title="Edit template"
        subtitle="Edit survey details for your customer"
      />
      {SurveyForm}
    </>
  );

  return (
    <div id="surveys-edit-template">
      <MSidepanelAndContent sidepanel={<MSteps />} content={Content} />
    </div>
  );
};

export default EditTemplate;
