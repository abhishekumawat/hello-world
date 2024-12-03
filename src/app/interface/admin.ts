export interface ProjectSummary {
    totalProjects: number;
    leadsStatus: IProjectLeadStatus[];
    accepted: number;
    siteVist: number;
    followUp: number;
    locationIssue: number;
    verificationPending: number;
    budgetIssue: number;
    lostToCompetitor: number;
    notConnected: number;
    other: number;
    recentLeads: IRecentLead[];
    deliverdleadsStatus: number;
  }
  
  interface IProjectLeadStatus {
    _id?: any; 
    pendingLeads: number;
  }
  
  interface IRecentLead {
    type: { enum: any[] }; 
    projects: string[];
    viewCount: number;
    _id: string;
    name: string;
    email: string;
    contactNumber?: string; 
    budget?: string; 
    location: string;
    status: string;
    createdBy: string;
    assignedTo?: string; 
    activities: any[];
    clientActivities: any[];
    createdAt: string;
    updatedAt: string;
    __v: number;
    clientStatus: string;
    updatedOn: string;
  }