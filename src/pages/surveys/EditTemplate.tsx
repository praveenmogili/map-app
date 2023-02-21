import React, { useState } from "react";
import { Form } from "react-bootstrap";
import {
  MButtonsRow,
  MH2TitleSubtitle,
  MSidepanelAndContent,
  MSteps,
} from "../../components";
import { useNavigate } from "react-router-dom";
import { getAllBlocks } from "../../api/surveys";
import AddIcon from "@mui/icons-material/Add";
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { useSortable } from "@dnd-kit/sortable";
import { SortableItem } from "./SortableItems";

const EditTemplate = () => {
  const navigate = useNavigate();
  const allBlocks = getAllBlocks();

  const [items, setItems] = useState([1, 2, 3]);
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  function handleDragEnd(event: any) {
    const { active, over } = event;

    if (active.id !== over.id) {
      setItems((items) => {
        const oldIndex = items.indexOf(active.id);
        const newIndex = items.indexOf(over.id);

        return arrayMove(items, oldIndex, newIndex);
      });
    }
  }

  const BlockOrdering = (
    <>
      <div className="block-ordering">
        <button className="add-block">
          <AddIcon />
        </button>

        <DndContext
          sensors={sensors}
          collisionDetection={closestCenter}
          onDragEnd={handleDragEnd}
        >
          <SortableContext items={items} strategy={verticalListSortingStrategy}>
            {items.map((id) => (
              <SortableItem key={id} id={id} />
            ))}
          </SortableContext>
        </DndContext>
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
