import { baseApi } from "@/redux/baseApi";
import type {
  IParams,
  IResponse,
  IResponseTourTypeData,
  ITourData,
  ITourTypeData,
  ITourTypeResponse,
} from "@/types";

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
    addTour: builder.mutation<IResponse<ITourData>, FormData>({
      query: (tourData) => ({
        url: "/tour/create",
        method: "POST",
        data: tourData,
      }),
      invalidatesTags: ["TOUR"],
    }),
    getTourTypes: builder.query<IResponseTourTypeData, IParams>({
      query: (params) => ({
        url: "/tour/tour-types",
        method: "GET",
        params,
      }),
      providesTags: ["TOUR"],
      transformResponse: (response: IResponse<IResponseTourTypeData>) =>
        response.data,
    }),
    removeTourType: builder.mutation<IResponse<null>, string>({
      query: (tourTypeId) => ({
        url: `/tour/tour-type/${tourTypeId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["TOUR"],
    }),
    getAllTours: builder.query({
      query: (params) => ({
        url: "/tour",
        method: "GET",
        params: params,
      }),
      providesTags: ["TOUR"],
      transformResponse: (response) => response.data,
    }),
  }),
});

export const {
  useGetTourTypesQuery,
  useAddTourTypeMutation,
  useRemoveTourTypeMutation,
  useAddTourMutation,
  useGetAllToursQuery,
} = tourApi;
