import React from "react";
import { Button, Dropdown, DropdownButton, Form } from "react-bootstrap";
import { getAllSurveys } from "../../api/surveys";
import {
  H2TitleSubtitle,
  MCollapsibleTable,
} from "../../components/index";
import { MCollapsibleTableRow } from "../../components/MCollapsibleTable";

const rows: MCollapsibleTableRow[] = getAllSurveys().map((survey) => ({
  Name: (<a href="#">{survey.name}</a>),
  Description: survey.description,
  Customer: survey.customer.name,
  Status: survey.status,
  expandableAttr: {
    displayName: "Additional info",
    jsx: (
      <>
        <b>Created</b>: {survey.created}
        <br />
        <b>Modified</b>: {survey.modified}
        <br />
      </>
    ),
  },
}));

const AllSurveys = () => {
  return (
    <div id="all-surveys">
      <H2TitleSubtitle
        title="Customer surveys"
        subtitle="Create and manage surveys"
      />
      <div className="container">
        <MCollapsibleTable rows={rows} />
      </div>
    </div>
  );
};

export default AllSurveys;
