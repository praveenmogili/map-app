import React from "react";

interface MH2TitleSubtitleProps {
  title: string;
  subtitle?: string;
  className?: string;
}

const MH2TitleSubtitle = (props: MH2TitleSubtitleProps) => {
  const { title, subtitle, className } = props;
  return (
    <div className={`h2-title-subtitle w-100 px-0 py-3 mb-2 ${className}`}>
      <h2 className="m-0">{title}</h2>
      <p className="subtitle m-0">{subtitle}</p>
    </div>
  );
};

export default MH2TitleSubtitle;
