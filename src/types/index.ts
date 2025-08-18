import type { IErrorData } from "./error.type.ts";

export type {
  ILogin,
  ILoginResponseData,
  IRegister,
  ISendOtp,
  IUserResponseData,
  IVerifyOtp,
} from "./auth.type.ts";

export interface IResponse<T> {
  success: boolean;
  message: string;
  data: T;
}

export interface IErrorResponse {
  data: IErrorData;
  status: number;
}
