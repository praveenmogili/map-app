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
    | { id: string; label: string; isSelected: boolean }[];
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


const EditBlock = () => {
  const [schema, setSchema] = useState<BlockSchema>();

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
        <Card defaultCardType="Radio" />
        <h3 className="ms-2">Section 2</h3>
        <Card isSectionHeader />
      </Form>
    </div>
  );
};

export default EditBlock;
