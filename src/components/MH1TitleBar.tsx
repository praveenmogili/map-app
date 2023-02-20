import React from "react";

interface MH1TitleBarProps {
  title: string;
  className?: string;
}

const MH1TitleBar = (props: MH1TitleBarProps) => {
  const { title, className } = props;
  return (
    <div className={`h1-title-bar py-1 w-100 ${className}`}>
      <div className="container-fluid">
        <h1>{title}</h1>
      </div>
    </div>
  );
};

export default MH1TitleBar;
