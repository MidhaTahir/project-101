import axios from "axios";
import ENDPOINTS from "../global/constants/endpoints";

export const signupService = async (userData) => {
  try {
    const response = await axios.post(`${ENDPOINTS.SIGNUP}`, userData);
    return response.data;
  } catch (error) {
    return {
      error: error.response.data.message,
      status: error.response.status,
    };
  }
};

export const loginService = async (userData) => {
  try {
    const response = await axios.post(`${ENDPOINTS.LOGIN}`, userData);
    return response.data;
  } catch (error) {
    return {
      error: error.response.data.message,
      status: error.response.status,
    };
  }
};
