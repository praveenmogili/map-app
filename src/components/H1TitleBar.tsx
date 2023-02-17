import React from "react";

interface H1TitleBarProps {
  title: string;
}

const H1TitleBar = (props: H1TitleBarProps) => {
  const { title } = props;
  return (
    <div className="h1-title-bar py-1 w-100">
      <div className="container">
        <h1>{title}</h1>
      </div>
    </div>
  );
};

export default H1TitleBar;
