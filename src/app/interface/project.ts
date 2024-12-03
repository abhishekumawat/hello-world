export interface Project {
    totalDocuments: number;
    totalPages: number;
    currentPage: number;
    projects: ProjectData[];


  }
  
  export interface ProjectData {
    

    propertyTypes: string[];
    _id: string;
    projectName: string;
    startDate: string;
    endDate: string;
    tat: number;
    cpl: number;
    totalLeadsToBeDeliverd: number;
    priceCostFrom: number;
    projectType: string;
    state: string;
    city: string;
    description: string;
    totalLeadstillDeliverd: number;
    projectId: string;
    createdBy: string;
    createdAt: string;
    updatedAt: string;
    __v: number;
  }
  
