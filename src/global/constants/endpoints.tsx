import { AUTH_BASE_URL } from "./apiRoutes";

const ENDPOINTS = {
  SIGNUP: `${AUTH_BASE_URL}/user`,
  LOGIN: `${AUTH_BASE_URL}/auth/login`,
};

export default ENDPOINTS;
