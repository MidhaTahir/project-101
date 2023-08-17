import { Dashboard } from "@mui/icons-material";
import { RoutePaths } from "../types/routeTypes";

const navLinks = [
  {
    id: 0,
    path: RoutePaths.ADMIN,
    name: "Admin",
    userRole: ["admin"],
    icon: <Dashboard />,
  },
  {
    id: 1,
    path: RoutePaths.CUSTOMER,
    name: "Customer",
    userRole: ["customer"],
    icon: <Dashboard />,
  },
  {
    // private page
    // accessible by all user roles
    id: 2,
    path: RoutePaths.DETAILS,
    name: "Details (Shared)",
    userRole: ["admin", "customer"],
    icon: <Dashboard />,
  },
];

export default navLinks;
