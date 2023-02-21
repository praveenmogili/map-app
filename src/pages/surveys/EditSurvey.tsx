import React, { useState } from "react";
import { Form, Button, Modal } from "react-bootstrap";
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

const surveyTemplates = [
  {
    id: 0,
    "Template Name": "Lacks Valley Survey Template",
    "Template Description": "Tailored Survey for Lacks Valley Furniture",
  },
  {
    id: 1,
    "Template Name": "Lacks Valley Survey Template 2",
    "Template Description": "Tailored Survey for Lacks Valley Furniture 2",
  },
];

const surveyTemplateColumns = [
  {
    field: "id",
    headerName: "ID",
    width: 70,
  },
  {
    field: "Template Name",
    headerName: "Template Name",
    width: 200,
  },
  {
    field: "Template Description",
    headerName: "Template Description",
    width: 200,
  },
];

const EditSurvey = () => {
  const [show, setShow] = useState(false);
  const [templateID, setTemplateID] = useState(0);
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
            title={surveyTemplates[templateID]["Template Name"]}
            subtitle={surveyTemplates[templateID]["Template Description"]}
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
            },
            {
              text: "Save draft",
            },
            {
              text: "Cancel",
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
          columns={surveyTemplateColumns}
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
