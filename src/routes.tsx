import { RoutePaths } from "./global/types/routeTypes";
import {
  AdminPage,
  CustomerPage,
  LoginPage,
  NotFoundPage,
  SharedPage,
  SignupPage,
} from "./pages";

const defaultRoutes = [
  {
    path: RoutePaths.ADMIN,
    name: "Admin",
    element: AdminPage,
    info: "private",
    userRole: ["admin"],
    redirectUrl: "/not-found",
  },
  {
    path: RoutePaths.CUSTOMER,
    name: "Customer",
    element: CustomerPage,
    info: "private",
    userRole: ["customer"],
    redirectUrl: "/not-found",
  },
  {
    // private page
    // accessible by all user roles
    path: RoutePaths.DETAILS,
    name: "Shared Page",
    element: SharedPage,
    info: "private",
    userRole: ["admin", "customer"],
    redirectUrl: "/not-found",
  },
  // public pages
  {
    path: RoutePaths.LOGIN,
    name: "LoginPage",
    element: LoginPage,
    info: "public",
    userRole: ["admin", "customer"],
  },
  {
    path: RoutePaths.SIGNUP,
    name: "SignupPage",
    element: SignupPage,
    info: "public",
    userRole: ["admin", "customer"],
  },
  {
    path: RoutePaths.NOT_FOUND,
    name: "Not Found Page",
    element: NotFoundPage,
    info: "public",
    userRole: ["admin", "customer"],
  },
];

export { defaultRoutes };
