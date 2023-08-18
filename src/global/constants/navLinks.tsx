import { Dashboard } from "@mui/icons-material";
import { RoutePaths } from "../types/routeTypes";
import { UserRole } from "../types/userRoles";

const navLinks = [
  {
    // private page
    // accessible by all user roles
    id: 3,
    path: RoutePaths.DETAILS,
    name: "Details (Shared)",
    userRole: [UserRole.SUPERADMIN, UserRole.ADMIN, UserRole.CUSTOMER],
    icon: <Dashboard />,
  },
  {
    id: 0,
    path: RoutePaths.ADMIN,
    name: "Admin",
    userRole: [UserRole.ADMIN],
    icon: <Dashboard />,
  },
  {
    id: 1,
    path: RoutePaths.GET_CUSTOMERS,
    name: "Get Customers",
    userRole: [UserRole.ADMIN],
    icon: <Dashboard />,
  },
  {
    id: 2,
    path: RoutePaths.CUSTOMER,
    name: "Customer",
    userRole: [UserRole.CUSTOMER],
    icon: <Dashboard />,
  },
];

export default navLinks;
