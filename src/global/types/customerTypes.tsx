import { UserRole } from "./userRoles";

// from api response
export interface Customer {
  id: string | number;
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
