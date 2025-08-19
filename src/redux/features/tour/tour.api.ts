import { baseApi } from "@/redux/baseApi";
import type { IResponse, ITourTypeData, ITourTypeResponse } from "@/types";
import type { IResponseTourTypeData } from "@/types/tour.type";

export const tourApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    addTourType: builder.mutation<IResponse<ITourTypeResponse>, ITourTypeData>({
      query: (tourTypeName) => ({
        url: "/tour/create-tour-type",
        method: "POST",
        data: tourTypeName,
      }),
      invalidatesTags: ["TOUR"],
    }),
    getTourTypes: builder.query<IResponseTourTypeData, undefined>({
      query: () => ({
        url: "/tour/tour-types",
        method: "GET",
      }),
      providesTags: ["TOUR"],
      transformResponse: (response: IResponse<IResponseTourTypeData>) =>
        response.data,
    }),
  }),
});

export const { useGetTourTypesQuery, useAddTourTypeMutation } = tourApi;
