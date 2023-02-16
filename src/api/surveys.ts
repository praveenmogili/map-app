import * as sampleData from './sampleData.json';

interface Customer {
    id: string;
    name: string;
}

interface Survey {
    id: string;
    name: string;
    description: string;
    customer: Customer;
    status: string;
    created: Date;
    modified: Date;
}

export function getAllSurveys(): any[] {
  return sampleData.surveys;
}
