import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User, UserRole } from "../global/types/userRoles";

interface AuthState {
  token: string | null;
  userType: UserRole | null;
  user: User | null;
}

const initialState: AuthState = {
  token: localStorage.getItem("token") || null,
  userType: null,
  user: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setToken: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
      localStorage.setItem("token", action.payload);
    },
    logout: (state) => {
      state.token = null;
      state.userType = null;
      localStorage.removeItem("token");
      localStorage.removeItem("userType");
    },
    setUserType: (state, action: PayloadAction<UserRole>) => {
      state.userType = action.payload;
      localStorage.setItem("userType", action.payload);
    },
    setUserData: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { setToken, logout, setUserType, setUserData } = authSlice.actions;

export default authSlice.reducer;
