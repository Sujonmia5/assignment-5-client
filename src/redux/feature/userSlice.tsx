import { createSlice } from "@reduxjs/toolkit";

type TInitialState = {
  user: { email: string; role: string; token: string };
};

const initialState: TInitialState = {
  user: {
    email: "",
    role: "",
    token: "",
  },
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { setUser } = userSlice.actions;
export default userSlice.reducer;
