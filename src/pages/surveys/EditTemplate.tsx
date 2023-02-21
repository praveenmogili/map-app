import React, { useState } from "react";
import { Form } from "react-bootstrap";
import {
  MButtonsRow,
  MH2TitleSubtitle,
  MSidepanelAndContent,
  MSortable,
  MSteps,
} from "../../components";
import { useNavigate } from "react-router-dom";
import { getAllBlocks } from "../../api/surveys";
import AddIcon from "@mui/icons-material/Add";

const EditTemplate = () => {
  const navigate = useNavigate();
  const allBlocks = getAllBlocks();
  const [blocksSelected, setBlocksSelected] = useState(["1", "2"]);

  const BlockOrdering = (
    <>
      <div className="block-ordering">
        <button className="add-block">
          <AddIcon />
        </button>
        <MSortable items={blocksSelected} setItems={setBlocksSelected} />
      </div>
    </>
  );

  const SurveyForm = (
    <Form>
      <Form.Group controlId="formSurveyName">
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter template name"
          className="mb-3"
        />

        <Form.Label>Description</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter customer email"
          className="mb-3"
        />

        <Form.Label>Automation Blueprint</Form.Label>
        <Form.Select placeholder="Enter survey name" className="mb-3">
          <option value="sdsd">fds</option>
        </Form.Select>

        <Form.Label>Block ordering</Form.Label>
        {BlockOrdering}

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
