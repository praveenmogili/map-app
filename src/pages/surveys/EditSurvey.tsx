import React from "react";
import { Form, Button } from "react-bootstrap";
import { H2TitleSubtitle } from "../../components";

const EditSurvey = () => {
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
          {/*  */}

          <Form.Label>Access permissions</Form.Label>
          {/*  */}

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
