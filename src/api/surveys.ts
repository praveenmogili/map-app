import sampleData from "./sampleData.json";

interface Customer {
  id: string;
  name: string;
  email: string;
}

interface Survey {
  id: string;
  name: string;
  description?: string;
  customerId: string;
  created: string;
  modified: string;
  templateId: string;
  status: string;
  customer?: Customer;
}

export function getAllSurveys(): Survey[] {
  const surveys: Survey[] = sampleData.surveys;
  surveys.forEach((survey) => {
    survey.customer = sampleData.customers.find(
      (customer) => customer.id === survey.customerId
    );
  });

  return surveys;
}

export interface SurveyTemplate {
  id: string;
  name: string;
  description?: string;
  created: string;
  modified: string;
}

export function getAllSurveyTemplates(): SurveyTemplate[] {
  return sampleData.survey_templates;
}

export interface Block {
  id: string;
  name: string;
  description?: string;
  created: string;
  modified: string;
}

export function getAllBlocks(): Block[] {
  return sampleData.blocks;
}
