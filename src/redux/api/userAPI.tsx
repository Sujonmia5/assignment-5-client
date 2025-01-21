import { OutSpaceAPI } from "./api";

const userAPI = OutSpaceAPI.injectEndpoints({
  endpoints: (builder) => ({
    registerUser: builder.mutation({
      query: (data) => {
        console.log(data);
        return {
          url: "/api/auth/signup",
          method: "POST",
          body: data,
        };
      },
    }),
    loginUser: builder.mutation({
      query: (data) => {
        return {
          url: "/api/auth/login",
          method: "POST",
          body: data,
        };
      },
    }),
  }),
});

export const { useRegisterUserMutation, useLoginUserMutation } = userAPI;
