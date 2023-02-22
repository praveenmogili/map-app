import React from "react";

interface SurveySectionHeaderProps {
  title: string;
  subtitle?: string;
  foreword?: string;
}

const defaultForeword = `We at Mythics, Inc. are committed to providing the best cloud computing solutions to meet our customers' needs. In order to better understand your specific requirements, we would like to invite you to participate in a short survey. 

The survey will take approximately 5 minutes to complete and will ask you about your current usage of cloud computing services, your future plans and expectations, and your level of satisfaction with your current provider. Your input is extremely valuable to us and will help us deliver the most relevant and effective solutions for you. 
  
Thank you for your time and support.`;

const SectionHeader = (props: SurveySectionHeaderProps) => {
  const { title, subtitle, foreword = defaultForeword } = props;

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
