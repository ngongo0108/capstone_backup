import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../stores";

interface User {
  _id: string | null;
}
interface AuthState {
  isAuthenticated: boolean;
  user: User;
}
const initialState: AuthState = {
  isAuthenticated: false,
  user: {
    _id: null,
  },
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, payload) => {
      state.isAuthenticated = true;
      state.user = payload.payload;
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.user = { _id: null };
    },
  },
});

export const { login, logout } = authSlice.actions;

// Selectors
export const selectIsAuthenticated = (state: RootState) =>
  state.auth.isAuthenticated;

export default authSlice;
