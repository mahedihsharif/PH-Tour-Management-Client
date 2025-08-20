import { baseApi } from "@/redux/baseApi";
import type {
  IResponse,
  ITourData,
  ITourTypeData,
  ITourTypeResponse,
} from "@/types";
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
    addTour: builder.mutation<IResponse<ITourData>, FormData>({
      query: (tourData) => ({
        url: "/tour/create",
        method: "POST",
        data: tourData,
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
    removeTourType: builder.mutation<IResponse<null>, string>({
      query: (tourTypeId) => ({
        url: `/tour/tour-type/${tourTypeId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["TOUR"],
    }),
  }),
});

export const {
  useGetTourTypesQuery,
  useAddTourTypeMutation,
  useRemoveTourTypeMutation,
  useAddTourMutation,
} = tourApi;
