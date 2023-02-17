import React from "react";

interface MStepsProps {
  steps: { name: string; onClick: () => void }[];
  current: number;
}

const MSteps = (props: MStepsProps) => {
  const { steps, current } = props;

  return (
    <div className="m-steps">
      <p className="m-0 steps-title">Steps</p>
      <hr className="short-sep" />
      <div className="steps-list">
        {steps.map((step, i) => {
          let stepClass = "d-flex flex-row align-items-center step-item ";
          if (i < current) {
            stepClass += "done";
          } else if (i === current) {
            stepClass += "current";
          } else {
            stepClass += "to-do";
          }
          return (
            <div className={stepClass} key={i}>
              <span className="dot me-2" />
              <a onClick={step.onClick} href="#" className="step-p m-0">
                {step.name}
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MSteps;
