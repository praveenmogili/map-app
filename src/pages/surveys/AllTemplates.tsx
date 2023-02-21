import React from "react";
import { Button, Dropdown, DropdownButton, Form } from "react-bootstrap";
import { getAllSurveyTemplates } from "../../api/surveys";
import { MH2TitleSubtitle, MCollapsibleTable } from "../../components";
import { MCollapsibleTableRow } from "../../components/MCollapsibleTable";
import { useNavigate } from "react-router-dom";

const AllTemplates = () => {
  const navigate = useNavigate();

  const rows: MCollapsibleTableRow[] = getAllSurveyTemplates().map(
    (template) => ({
      Name: (
        <a href="#" onClick={() => navigate(`/surveys/template/${template.id}/block/overview`)}>
          {template.name}
        </a>
      ),
      Description: template.description,
      expandableAttr: {
        displayName: "Additional info",
        jsx: (
          <>
            <b>Created</b>: {template.created}
            <br />
            <b>Modified</b>: {template.modified}
            <br />
          </>
        ),
      },
    })
  );

  return (
    <div id="surveys-all" className="container-fluid px-4">
      <MH2TitleSubtitle
        title="Survey templates"
        subtitle="Create and manage survey templates"
      />
      <Button
        variant="primary"
        className="mb-3"
        onClick={() => navigate("/surveys/template/323/block/overview")}
      >
        Create template
      </Button>
      <MCollapsibleTable rows={rows} />
    </div>
  );
};

export default AllTemplates;
