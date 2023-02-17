import React from "react";

interface MBoxRightBtnProps {
  title: string;
  subtitle?: string;
  button1?: JSX.Element;
  button2?: JSX.Element;
}

const TitleSubtitle = (title: string, subtitle?: string) => (
  <div className="w-100 px-0 py-3 mb-2">
    <p className="title m-0">{title}</p>
    <p className="subtitle m-0">{subtitle}</p>
  </div>
);

const MChooseSurveyTemplate = (props: MBoxRightBtnProps) => {
  const { title, subtitle, button1, button2 } = props;
  return (
    <div className="m-box-right-btn bt-input-container d-flex flex-row py-3">
      {TitleSubtitle(title, subtitle)}
      <div className="d-flex flex-column justify-content-around">
        {button1}
        {button2}
      </div>
    </div>
  );
};

export default MChooseSurveyTemplate;
