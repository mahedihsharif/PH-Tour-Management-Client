import { baseApi } from "@/redux/baseApi";
import type { IDivisionResponse, IParams, IResponse } from "@/types";

export const divisionApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    addDivision: builder.mutation<IResponse<IDivisionResponse>, FormData>({
      query: (divisionData) => ({
        url: "/division/create",
        method: "POST",
        data: divisionData,
      }),
      invalidatesTags: ["DIVISION"],
    }),
    getDivisions: builder.query<IDivisionResponse, IParams>({
      query: (params) => ({
        url: "/division",
        method: "GET",
        params: params,
      }),
      providesTags: ["DIVISION"],
      transformResponse: (response: IResponse<IDivisionResponse>) =>
        response.data,
    }),
  }),
});

export const { useAddDivisionMutation, useGetDivisionsQuery } = divisionApi;
