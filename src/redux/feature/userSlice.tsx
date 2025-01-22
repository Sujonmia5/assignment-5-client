import { createSlice } from "@reduxjs/toolkit";

type TUser = { email: string; role: string; token: string };

type TInitialState = {
  user: null | TUser;
};

const initialState: TInitialState = {
  user: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = null;
    },
  },
});

export const { setUser, logout } = userSlice.actions;
export default userSlice.reducer;
