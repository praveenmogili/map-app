import React from "react";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  foreword?: string;
}

const SectionHeader = (props: SectionHeaderProps) => {
  const { title, subtitle, foreword } = props;

  return (
    <div className="card section-header">
      <h3>{title}</h3>
      <p className="subtitle">{subtitle}</p>
      <hr className="short-sep" />
      <p className="paragraph">{foreword}</p>
    </div>
  );
};

export default SectionHeader;
