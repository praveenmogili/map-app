import React from "react";
import { Button, Dropdown, DropdownButton, Form } from "react-bootstrap";
import { getAllBlocks } from "../../api/surveys";
import { MH2TitleSubtitle, MCollapsibleTable } from "../../components";
import { MCollapsibleTableRow } from "../../components/MCollapsibleTable";
import { useNavigate } from "react-router-dom";

const AllBlocks = () => {
  const navigate = useNavigate();

  const rows: MCollapsibleTableRow[] = getAllBlocks().map(
    (block) => ({
      Name: (
        <a href="#" onClick={() => navigate(`/surveys/template/${block.id}/block/overview`)}>
          {block.name}
        </a>
      ),
      Description: block.description,
      expandableAttr: {
        displayName: "Additional info",
        jsx: (
          <>
            <b>Created</b>: {block.created}
            <br />
            <b>Modified</b>: {block.modified}
            <br />
          </>
        ),
      },
    })
  );

  return (
    <div id="surveys-all" className="container-fluid px-4">
      <MH2TitleSubtitle
        title="Blocks"
        subtitle="Create and manage survey template blocks"
      />
      <Button
        variant="primary"
        className="mb-3"
        onClick={() => navigate("/surveys/block/23")}
      >
        Create block
      </Button>
      <MCollapsibleTable rows={rows} />
    </div>
  );
};

export default AllBlocks;
