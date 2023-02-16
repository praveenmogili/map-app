import React from "react";

const H1TitleBar = (props) => {
  const { title } = props;
  return (
    <div className="h1-title-bar pt-1 pb-1 w-100">
      <div className="container">
        <h1>{title}</h1>
      </div>
    </div>
  );
};

export default H1TitleBar;
