import * as sampleData from "./sampleData.json";

interface Customer {
  id: string;
  name: string;
  email: string;
}

interface Survey {
  id: string;
  name: string;
  description: string;
  customer: Customer;
  created: string;
  modified: string;
  template: string;
  status: string;
}

export function getAllSurveys(): Survey[] {
  return sampleData.surveys;
}
