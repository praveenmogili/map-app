import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Button, Modal } from "react-bootstrap";
import { getAllSurveyTemplates } from "../../api/surveys";
import {
  MButtonsRow,
  MCollapsibleTable,
  MDataTable,
  MH2TitleSubtitle,
  MSmallDropdown,
} from "../../components";
import MSelect from "../../components/MSelect";
import MStepsAndContent from "../../components/MStepsAndContent";
import AccessPermissions from "../../features/surveys/components/AccessPermissions";
import ChooseSurveyTemplate from "../../features/surveys/components/ChooseSurveyTemplate";

const SURVEY_TEMPLATE_COLUMNS = [
  {
    field: "name",
    headerName: "Template Name",
    width: 200,
  },
  {
    field: "description",
    headerName: "Template Description",
    width: 200,
  },
];

const EditSurvey = () => {
  const [show, setShow] = useState(false);
  const surveyTemplates = getAllSurveyTemplates();
  const [templateId, setTemplateID] = useState(surveyTemplates[0].id);
  const currentTemplate = surveyTemplates.find((t) => t.id === templateId)!;
  const navigate = useNavigate();

  const surveyPermissions = [
    {
      Name: "All employees",
      Permission: <MSelect className="w-50" options={["Read", "Write"]} />,
    },
    {
      Name: "All managers",
      Permission: <MSelect className="w-50" options={["Read", "Write"]} />,
    },
  ];

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

        <Form.Label>Survey template</Form.Label>
        <div className="mb-3">
          <ChooseSurveyTemplate
            title={currentTemplate?.name}
            subtitle={currentTemplate?.description}
            button1={<Button onClick={() => setShow(true)}>Choose</Button>}
          />
        </div>

        <Form.Label>Access permissions</Form.Label>
        <div className="mb-4">
          <AccessPermissions rows={surveyPermissions} />
        </div>

        <MButtonsRow
          buttons={[
            {
              variant: "primary",
              type: "submit",
              text: "Submit",
              onClick: () => navigate("/surveys"),
            },
            {
              text: "Save draft",
              onClick: () => navigate("/surveys"),
            },
            {
              text: "Cancel",
              onClick: () => navigate("/surveys"),
            },
          ]}
        />
      </Form.Group>
    </Form>
  );

  const ChooseTemplateModal = (
    <Modal
      show={show}
      onHide={() => setShow(false)}
      dialogClassName="modal-right"
      aria-labelledby="example-custom-modal-styling-title"
    >
      <Modal.Header closeButton>
        <Modal.Title id="example-custom-modal-styling-title">
          Custom Modal Styling
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <MDataTable
          rows={surveyTemplates}
          columns={SURVEY_TEMPLATE_COLUMNS}
          className="mb-3"
          onSelectionModelChange={(newSelection) => {
            setTemplateID(newSelection[0]);
          }}
        />
        <MButtonsRow
          buttons={[
            {
              variant: "primary",
              type: "submit",
              text: "Submit",
              onClick: () => setShow(false),
            },
          ]}
        />
      </Modal.Body>
    </Modal>
  );

  return (
    <div id="surveys-edit" className="container-fluid px-4">
      <MH2TitleSubtitle
        title="Edit survey"
        subtitle="Edit survey details for your customer"
      />
      {SurveyForm}
      {ChooseTemplateModal}
    </div>
  );
};

export default EditSurvey;
