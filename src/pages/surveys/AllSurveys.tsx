import React from "react";
import { Button, Dropdown, DropdownButton, Form } from "react-bootstrap";
import { getAllSurveys } from "../../api/surveys";
import { H2TitleSubtitle, MCollapsibleTable } from "../../components/index";
import { MCollapsibleTableRow } from "../../components/MCollapsibleTable";

const rows: MCollapsibleTableRow[] = getAllSurveys().map((survey) => ({
  Name: <a href="#">{survey.name}</a>,
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
    <div id="all-surveys" className="container">
      <H2TitleSubtitle
        title="Customer surveys"
        subtitle="Create and manage surveys"
      />
      <Button variant="primary" className="mb-3">Create survey</Button>
      <MCollapsibleTable rows={rows} />
    </div>
  );
};

export default AllSurveys;
