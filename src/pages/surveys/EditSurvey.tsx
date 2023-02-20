import React, { useState } from "react";
import { Form, Button, Modal } from "react-bootstrap";
import { MCollapsibleTable, MH2TitleSubtitle, MSmallDropdown } from "../../components";
import MSelect from "../../components/MSelect";
import MStepsAndContent from "../../components/MStepsAndContent";
import AccessPermissions from "../../features/surveys/components/AccessPermissions";
import ChooseSurveyTemplate from "../../features/surveys/components/ChooseSurveyTemplate";

const EditSurvey = () => {
  const [show, setShow] = useState(true);
  const survey_permissions = [
    {
      Name: "All employees",
      Permission: <MSelect className="w-50" options={["Read", "Write"]} />,
    },
    {
      Name: "All managers",
      Permission: <MSelect className="w-50" options={["Read", "Write"]} />,
    },
  ];

  return (
    <div id="surveys-edit" className="container-fluid px-4">
      <>
        <Button variant="primary" onClick={() => setShow(true)}>
          Custom Width Modal
        </Button>

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
            <>
              <MCollapsibleTable rows={survey_permissions} />
            </>
          </Modal.Body>
        </Modal>
      </>
      <MH2TitleSubtitle
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
            <ChooseSurveyTemplate
              title="Lacks Valley Survey Template"
              subtitle="Tailored Survey for Lacks Valley Furniture"
              button1={<Button>Choose</Button>}
            />
          </div>

          <Form.Label>Access permissions</Form.Label>
          <div className="mb-4">
            <AccessPermissions rows={survey_permissions} />
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
