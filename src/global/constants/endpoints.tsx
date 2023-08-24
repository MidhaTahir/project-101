import { AUTH_BASE_URL } from "./apiRoutes";

const ENDPOINTS = {
  SIGNUP: `${AUTH_BASE_URL}/user`,
  LOGIN: `${AUTH_BASE_URL}/auth/login`,
  GET_ALL_CUSTOMERS: `${AUTH_BASE_URL}/customer`,
  DELETE_CUSTOMER: `${AUTH_BASE_URL}/customer`,
  UPDATE_CUSTOMER: `${AUTH_BASE_URL}/customer`,
};

export default ENDPOINTS;
