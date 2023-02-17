import React from "react";
import { MCollapsibleTable } from "../../../components";
import { MCollapsibleTableRow } from "../../../components/MCollapsibleTable";

const AccessPermissions = (props: { rows: MCollapsibleTableRow[] }) => {
  const { rows } = props;
  return (
    <div className="m-access-permissions">
      <MCollapsibleTable rows={rows} />
    </div>
  );
};

export default AccessPermissions;
