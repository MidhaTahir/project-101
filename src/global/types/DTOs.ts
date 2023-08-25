import { UserRole } from "./userRoles";

interface LoginUser {
  id: string;
  sourceId: string | null;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  username: string;
  userType: UserRole;
  createdAt: string;
  updatedAt: string;
  deletedAt: string | null;
}

export interface LoginApiResponse {
  status: number;
  message: string;
  data: {
    payload: {
      token: string;
      user: LoginUser;
    };
  };
}
