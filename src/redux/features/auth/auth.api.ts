import { baseApi } from "@/redux/baseApi";
import type {
  ILogin,
  ILoginResponseData,
  IRegister,
  IResponse,
  ISendOtp,
  IUserResponseData,
  IVerifyOtp,
} from "@/types";

export const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation<IResponse<ILoginResponseData>, ILogin>({
      query: (userInfo) => ({
        url: "/auth/login",
        method: "POST",
        data: userInfo,
      }),
    }),
    logout: builder.mutation({
      query: () => ({
        url: "/auth/logout",
        method: "POST",
      }),
      invalidatesTags: ["AUTH"],
    }),
    register: builder.mutation<IResponse<IUserResponseData>, IRegister>({
      query: (userInfo) => ({
        url: "/user/register",
        method: "POST",
        data: userInfo,
      }),
    }),
    sendOtp: builder.mutation<IResponse<null>, ISendOtp>({
      query: (otpInfo) => ({
        url: "/otp/send",
        method: "POST",
        data: otpInfo,
      }),
    }),
    verifyOtp: builder.mutation<IResponse<null>, IVerifyOtp>({
      query: (otpInfo) => ({
        url: "/otp/verify",
        method: "POST",
        data: otpInfo,
      }),
    }),
    userInfo: builder.query<IResponse<IUserResponseData>, undefined>({
      query: () => ({
        url: "/user/me",
        method: "GET",
      }),
      providesTags: ["AUTH"],
    }),
  }),
});

export const {
  useRegisterMutation,
  useLoginMutation,
  useSendOtpMutation,
  useVerifyOtpMutation,
  useLogoutMutation,
  useUserInfoQuery,
} = authApi;
