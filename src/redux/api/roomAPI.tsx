import { OutSpaceAPI } from "./api";

const roomAPI = OutSpaceAPI.injectEndpoints({
  endpoints: (builder) => ({
    getRooms: builder.query({
      query: (arg) => {
        const params = new URLSearchParams();
        if (arg.limit) params.append("limit", arg.limit);
        return {
          url: "/api/rooms",
          method: "GET",
          params: params,
        };
      },
    }),
    getRoomById: builder.query({
      query: (id) => ({
        url: `/api/rooms/${id}`,
        method: "GET",
      }),
    }),
  }),
});

export const { useGetRoomsQuery, useGetRoomByIdQuery } = roomAPI;
