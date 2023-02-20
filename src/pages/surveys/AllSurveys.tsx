import React from "react";
import { Button, Dropdown, DropdownButton, Form } from "react-bootstrap";
import { getAllSurveys } from "../../api/surveys";
import { MH2TitleSubtitle, MCollapsibleTable } from "../../components";
import { MCollapsibleTableRow } from "../../components/MCollapsibleTable";
import { useNavigate } from "react-router-dom";

const AllSurveys = () => {
  const navigate = useNavigate();

  const rows: MCollapsibleTableRow[] = getAllSurveys().map((survey) => ({
    Name: (
      <a href="#" onClick={() => navigate("/surveys/editSurvey")}>
        {survey.name}
      </a>
    ),
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

  return (
    <div id="surveys-all" className="container-fluid px-4">
      <MH2TitleSubtitle
        title="Customer surveys"
        subtitle="Create and manage surveys"
      />
      <Button
        variant="primary"
        className="mb-3"
        onClick={() => navigate("/surveys/surveyResponses")}
      >
        Create survey
      </Button>
      <MCollapsibleTable rows={rows} />
    </div>
  );
};

export default AllSurveys;
