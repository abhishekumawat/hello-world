export interface Client {
  _id: string;
  name: string;
  clientType: string;
  contactPerson: string;
  contactNumber: string;
  email: string;
  alternativeEmail?: string;
  clientStatus: boolean;
  sendSMS: boolean;
  imge: string;
  __v: number;
  address: Address;
  projects: Project[];
}

interface Address {
  address1: string;
  address2: string;
  area: string;
  state: string;
  city: string;
  zip: number;
}

interface Project {
  propertyTypes: string[];
  _id: string;
  projectName: string;
  state: string;
  city: string;
  startDate: string;
  endDate: string; 
  description: string;
  tat: number | null;
  cpl: number;
  priceCostFrom: number;
  totalLeadsToBeDeliverd: number;
  projectType: string;
  totalLeadstillDeliverd: number;
  projectId: string;
  createdBy: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface ClientResponse {
  totalDocuments: number;
  totalPages: number;
  currentPage: number;
  clients: Client[];
}