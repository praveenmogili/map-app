import React from "react";
import { Button, Dropdown, DropdownButton, Form } from "react-bootstrap";
import { getAllSurveys, VisibleSurvey } from "../../api/surveys";
import { H2TitleSubtitle, MTable } from "../../components/index";
import { DataGridColumn } from "../../components/MTable";

const columns: DataGridColumn[] = [
  { field: "name", headerName: "Name", width: 130 },
  {
    field: "description",
    headerName: "Description",
    width: 130,
  },
  { field: "customerName", headerName: "Customer", width: 70 },
  { field: "status", headerName: "Status", width: 70 },
];

const rows: VisibleSurvey[] = getAllSurveys().map((survey) => ({
  id: survey.id,
  name: survey.name,
  description: survey.description,
  customerName: survey.customer.name,
  status: survey.status,
}));

const AllSurveys = () => {
  return (
    <div id="all-surveys">
      <H2TitleSubtitle
        title="Customer surveys"
        subtitle="Create and manage surveys"
      />
      <div className="container">
        <MTable
          rows={rows}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          checkboxSelection
        />
      </div>
    </div>
  );
};

export default AllSurveys;
