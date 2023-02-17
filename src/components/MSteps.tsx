import React from "react";

const MSteps = (props: { steps: string[]; current: number }) => {
  const { steps, current } = props;

  return (
    <div className="m-steps">
      <p className="steps-title">Steps</p>
      <hr className="short-sep" />
      <div className="steps-list">
        {steps.map((step, i) => {
          let stepClass;
          if (i < current) {
            stepClass = "step-p done";
          } else if (i === current) {
            stepClass = "step-p current";
          } else {
            stepClass = "step-p to-do";
          }
          return (
            <>
              <p className={stepClass} key={i}>
                <span className="dot" />
                {step}
              </p>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default MSteps;
