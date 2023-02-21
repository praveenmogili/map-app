import React from "react";
import { useNavigate } from "react-router-dom";
import {
  MH1TitleBar,
  MSidepanelAndContent,
  MSubsectionList,
} from "../../components";
import AllBlocks from "./AllBlocks";

const Blocks = () => {
  const navigate = useNavigate();
  const items = [
    { name: "Surveys", onClick: () => navigate("/surveys") },
    { name: "Templates", onClick: () => navigate("/surveys/templates") },
    { name: "Blocks", onClick: () => navigate("/surveys/blocks") },
  ];

  return (
    <div id="surveys-blocks">
      <MH1TitleBar title="Surveys" />
      <MSidepanelAndContent
        sidepanel={<MSubsectionList items={items} />}
        content={<AllBlocks />}
      />
    </div>
  );
};

export default Blocks;
