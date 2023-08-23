import { RoutePaths, RouteTypes } from "./global/types/routeTypes";
import { UserRole } from "./global/types/userRoles";
import {
  AdminPage,
  CustomerPage,
  GetCustomersPage,
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
    info: RouteTypes.PRIVATE,
    userRole: [UserRole.ADMIN],
    redirectUrl: "/not-found",
  },
  {
    path: RoutePaths.CUSTOMER,
    name: "Customer",
    element: CustomerPage,
    info: RouteTypes.PRIVATE,
    userRole: [UserRole.CUSTOMER],
    redirectUrl: "/not-found",
  },
  //only admin can view customers (CRUD)
  {
    path: RoutePaths.GET_CUSTOMERS,
    name: "Get Customers",
    element: GetCustomersPage,
    info: RouteTypes.PRIVATE,
    userRole: [UserRole.ADMIN, UserRole.SUPERADMIN],
    redirectUrl: "/not-found",
  },
  {
    // private page
    // accessible by all user roles
    path: RoutePaths.DETAILS,
    name: "Shared Page",
    element: SharedPage,
    info: RouteTypes.PRIVATE,
    userRole: [UserRole.ADMIN, UserRole.SUPERADMIN, UserRole.CUSTOMER],
    redirectUrl: "/not-found",
  },
  // public pages
  {
    path: RoutePaths.LOGIN,
    name: "LoginPage",
    element: LoginPage,
    info: RouteTypes.PUBLIC,
    userRole: [UserRole.ADMIN, UserRole.SUPERADMIN, UserRole.CUSTOMER],
  },
  {
    path: RoutePaths.SIGNUP,
    name: "SignupPage",
    element: SignupPage,
    info: RouteTypes.PUBLIC,
    userRole: [UserRole.ADMIN, UserRole.SUPERADMIN, UserRole.CUSTOMER],
  },
  {
    path: RoutePaths.NOT_FOUND,
    name: "Not Found Page",
    element: NotFoundPage,
    info: RouteTypes.PUBLIC,
    userRole: [UserRole.ADMIN, UserRole.SUPERADMIN, UserRole.CUSTOMER],
  },
];

export { defaultRoutes };
