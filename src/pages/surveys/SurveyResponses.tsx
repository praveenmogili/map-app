import React from "react";
import { H2TitleSubtitle, MSteps } from "../../components";
import SectionHeader from "../../features/surveys/components/SectionHeader";

const SurveyResponses = () => {
  const ppp = `We at Mythics, Inc. are committed to providing the best cloud computing solutions to meet our customers' needs. In order to better understand your specific requirements, we would like to invite you to participate in a short survey. 

The survey will take approximately 5 minutes to complete and will ask you about your current usage of cloud computing services, your future plans and expectations, and your level of satisfaction with your current provider. Your input is extremely valuable to us and will help us deliver the most relevant and effective solutions for you. 

Thank you for your time and support.`;


  return (
    <div>
      <H2TitleSubtitle
        title="Survey Responses"
        subtitle="View and manage survey responses"
      />
      <SectionHeader
        title="Order Test 1"
        subtitle="A survey to calculate your Oracle needs"
        foreword={ppp}
      />
    </div>
  );
};

export default SurveyResponses;
