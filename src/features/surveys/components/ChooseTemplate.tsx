import React from "react";
import { MCollapsibleTable } from "../../../components";

const ChooseTemplate = () => {
  return (
    <div>
      <MCollapsibleTable
        rows={[
          {
            "Template name": "Lacks Valley Survey Template",
            Description: "This is a template for the Lacks Valley Survey",
            expandableAttr: {
              displayName: "Template Details",
              jsx: <div>Template Details</div>,
            },
          },
          {
            "Template name": "Lacks Valley Survey Template",
            Description: "This is a template for the Lacks Valley Survey",
            expandableAttr: {
              displayName: "Template Details",
              jsx: <div>Template Details</div>,
            },
          },
        ]}
      />
    </div>
  );
};

export default ChooseTemplate;
