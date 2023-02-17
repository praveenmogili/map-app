import React from "react";

interface H2TitleSubtitleProps {
  title: string;
  subtitle: string;
}

const H2TitleSubtitle = (props: H2TitleSubtitleProps) => {
  const { title, subtitle } = props;
  return (
    <div className="container h2-title-subtitle w-100 p-3">
      <h2 className="m-0">{title}</h2>
      <p className="subtitle m-0">{subtitle}</p>
    </div>
  );
};

export default H2TitleSubtitle;
