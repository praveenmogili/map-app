import React from "react";
import { H2TitleSubtitle } from "../../../components";

interface MBoxRightBtnProps {
  title: string;
  subtitle?: string;
  button1?: JSX.Element;
  button2?: JSX.Element;
}

const MBoxRightBtn = (props: MBoxRightBtnProps) => {
  const { title, subtitle, button1, button2 } = props;
  return (
    <div className="m-box-right-btn d-flex flex-row">
      <H2TitleSubtitle title={title} subtitle={subtitle} />
      <div className="d-flex flex-column">
        {button1}
        {button2}
      </div>
    </div>
  );
};

export default MBoxRightBtn;
