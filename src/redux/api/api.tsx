/* eslint-disable react-refresh/only-export-components */
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const OutSpaceAPI = createApi({
  reducerPath: "outSpaceApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://assignment-5-server-nine.vercel.app/",
  }),
  endpoints: () => ({}),
  tagTypes: ["roomsData"],
});

export const { reducer: apiReducer, middleware: apiMiddleware } = OutSpaceAPI;
