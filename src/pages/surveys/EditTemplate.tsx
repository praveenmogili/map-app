import React, { useState } from "react";
import { Form, Modal } from "react-bootstrap";
import {
  MButtonsRow,
  MDataTable,
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
  const [blocksSelected, setBlocksSelected] = useState([allBlocks[0].name]);
  const [show, setShow] = useState(false);
  
  const blockSteps = blocksSelected.map((b) => ({
    name: b,
  }));
  const steps = [{ name: "Overview" }, ...blockSteps];

  const BLOCK_COLUMNS = [
    {
      field: "name",
      headerName: "Block Name",
      width: 200,
    },
    {
      field: "description",
      headerName: "Block Description",
      width: 200,
    },
  ];

  function handleBlockSelection(newSelection: string[]) {
    setBlocksSelected(
      allBlocks
        .filter((block) => newSelection.includes(block.id))
        .map((block) => block.name)
    );
  }

  const ChooseBlocksModal = (
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
          rows={allBlocks}
          columns={BLOCK_COLUMNS}
          className="mb-3"
          checkboxSelection
          onSelectionModelChange={handleBlockSelection}
        />
        <MButtonsRow
          buttons={[
            {
              variant: "primary",
              type: "submit",
              text: "Confirm",
              onClick: () => setShow(false),
            },
          ]}
        />
      </Modal.Body>
    </Modal>
  );

  const BlockOrdering = (
    <div className="block-ordering">
      <button
        className="add-block"
        onClick={(e) => {
          e.preventDefault();
          setShow(true);
        }}
      >
        <AddIcon />
      </button>
      <MSortable items={blocksSelected} setItems={setBlocksSelected} />
      {ChooseBlocksModal}
    </div>
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
              text: "Next",
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
      <MSidepanelAndContent
        sidepanel={<MSteps steps={steps} />}
        content={Content}
      />
    </div>
  );
};

export default EditTemplate;
