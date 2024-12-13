export interface ProjectSummary {
    totalProjects: number;
    leadsStatus: ProjectLeadStatus[];
    accepted: number;
    siteVist: number;
    followUp: number;
    locationIssue: number;
    verificationPending: number;
    budgetIssue: number;
    lostToCompetitor: number;
    notConnected: number;
    other: number;
    recentLeads: RecentLead[];
    deliverdleadsStatus: number;
  }
  
  interface ProjectLeadStatus {
    _id?: any; 
    pendingLeads: number;
  }
  
  interface RecentLead {
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