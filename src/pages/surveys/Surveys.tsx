import AllSurveys from "./AllSurveys";
import React from "react";
import {
  MH1TitleBar,
  MSidepanelAndContent,
  MSubsectionList,
} from "../../components";
import { useNavigate } from "react-router-dom";

const Surveys = () => {
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
        content={<AllSurveys />}
      />
    </div>
  );
};

export default Surveys;
