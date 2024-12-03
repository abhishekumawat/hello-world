export interface User {
    totalDocuments: Number;
    totalPages: Number;
    currentPage:Number;
    users:userlist[];

    
  }

 interface userlist{
    active: boolean;
    isVerified: boolean;
    _id: string;
    firstName: string;
    email: string;
    contactNumber: string;
    otp: string;
    role?: {
      _id: string;
      name: string;
      permissions: string[];
      __v: number;
    };
    clientId: string;
    createdAt: string;
    updatedAt: string;
    __v: number;
    lastName: string;
    password?: string;
  }
