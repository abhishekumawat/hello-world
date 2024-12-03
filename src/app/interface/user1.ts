export interface Users {
    _id: string;
    firstName: string;
    lastName: string;
    email: string;
    contactNumber: string;
    active: boolean;
    isVerified: boolean;
    role: Role | null; 
    clientId?: string; 
    otp: string;
    createdAt: string;
    updatedAt: string;
    __v: number;
    password?: string; 
  }
  
  export interface Role {
    _id: string;
    name: string;
    permissions: string[];
  }