import React, { useState } from "react";
import { Button, Form, Row } from "react-bootstrap";
import {
  MH2TitleSubtitle,
  MSidepanelAndContent,
  MSteps,
} from "../../components";
import Card from "../../features/surveys/components/Card";
import SectionHeader from "../../features/surveys/components/SectionHeader";
import AddIcon from "@mui/icons-material/Add";
import ViewStreamIcon from "@mui/icons-material/ViewStream";
import { createRandomId } from "../../utils/utils";

const AddButtons = (isInArray: boolean = false) => (
  <div className="d-flex justify-content-center">
    <div className="d-flex flex-row">
      {!isInArray && (
        <Button variant="primary add-card d-flex flex-row" className="ms-2">
          <ViewStreamIcon /> <p className="ms-2 my-0">Add section</p>
        </Button>
      )}
      <Button variant="primary add-card d-flex flex-row" className="ms-2">
        <AddIcon /> <p className="ms-2 my-0">Add card</p>
      </Button>
    </div>
  </div>
);

interface CardSchema {
  type: string;
  id: string;
  title: string;
  description?: string;
  value?:
    | string
    | number
    | { id: string; label: string; isSelected: boolean }[]
    | CardSchema[];
}

interface BlockSchema {
  type: string;
  id: string;
  title: string;
  description?: string;
  created: string;
  updated: string;
  version: number;
  questions: CardSchema[];
}

const startingSchema: BlockSchema = {
  type: "Block",
  id: `block.${createRandomId()}`,
  title: "Untitled Block",
  description: "",
  created: new Date().toISOString(),
  updated: new Date().toISOString(),
  version: 1,
  questions: [
    {
      id: `card.${createRandomId()}`,
      type: "section-header",
      title: "Section 1",
      description: "",
      value: "",
    },
    {
      id: `card.${createRandomId()}`,
      type: "string",
      title: "Short answer",
      description: "Write your short answer here",
      value: "",
    },
  ],
};

const EditBlock = () => {
  const [schema, setSchema] = useState<BlockSchema>(startingSchema);
  let sectionNumber = 1;

  const allCards = schema.questions.map((card, index) => {
    return (
      <>
        {/* <Card setSchema={setSchema} cardIndex={index} cardData={card} /> */}
      </>
    );
  });

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
        {AddButtons()}
        <Card />
        <Card defaultCardTypeId="radio" />
        <h3 className="ms-2">Section 2</h3>
        <Card isSectionHeader />
      </Form>
    </div>
  );
};

export default EditBlock;
