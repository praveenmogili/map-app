import React from "react";

interface H1TitleBarProps {
  title: string;
  className?: string;
}

const H1TitleBar = (props: H1TitleBarProps) => {
  const { title, className } = props;
  return (
    <div className={`h1-title-bar py-1 w-100 ${className}`}>
      <div className="container">
        <h1>{title}</h1>
      </div>
    </div>
  );
};

export default H1TitleBar;
