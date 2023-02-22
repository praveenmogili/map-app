import React from "react";

interface SurveySectionHeaderProps {
  title: string;
  subtitle?: string;
  foreword?: string;
}

const SectionHeader = (props: SurveySectionHeaderProps) => {
  const { title, subtitle, foreword } = props;

  return (
    <div className="survey-card section-header">
      <h3 className="m-0">{title}</h3>
      <p className="subtitle">{subtitle}</p>
      {foreword ? <hr className="short-sep" /> : null}
      <p className="paragraph">{foreword}</p>
    </div>
  );
};

export default SectionHeader;
