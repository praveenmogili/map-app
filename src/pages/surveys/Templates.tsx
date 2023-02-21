import React from "react";
import { useNavigate } from "react-router-dom";
import {
  MH1TitleBar,
  MSidepanelAndContent,
  MSubsectionList,
} from "../../components";
import AllSurveys from "./AllSurveys";
import AllTemplates from "./AllTemplates";

const Templates = () => {
  const navigate = useNavigate();
  const items = [
    { name: "Surveys", onClick: () => navigate("/surveys") },
    { name: "Templates", onClick: () => navigate("/surveys/templates") },
    { name: "Blocks", onClick: () => navigate("/surveys/blocks") },
  ];

  return (
    <div id="surveys-main">
      <MH1TitleBar title="Surveys" />
      <MSidepanelAndContent
        sidepanel={<MSubsectionList items={items} />}
        content={<AllTemplates />}
      />
    </div>
  );
};

export default Templates;
