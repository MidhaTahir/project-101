export enum UserRole {
  ADMIN = "admin",
  CUSTOMER = "customer",
  SUPERADMIN = "superadmin",
}

// Superadmin can view, edit, delete, update all admins, customer
// Admin can view, edit, delete, update all customers

export interface User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  username: string;
  userType: UserRole;
}
