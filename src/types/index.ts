import type { ComponentType } from "react";
import type { IErrorData } from "./error.type.ts";

export type {
  ILogin,
  ILoginResponseData,
  IRegister,
  ISendOtp,
  IUserResponseData,
  IVerifyOtp,
} from "./auth.type.ts";
export type { IDivisionResponse } from "./division.type.ts";
export type {
  IResponseTourTypeData,
  ITourData,
  ITourTypeData,
  ITourTypeResponse,
} from "./tour.type.ts";

export interface IResponse<T> {
  success: boolean;
  message: string;
  data: T;
}

export interface IErrorResponse {
  data: IErrorData;
  status: number;
}

export interface ISidebarItem {
  title: string;
  items: {
    title: string;
    url: string;
    component: ComponentType;
  }[];
}

export type TRole = "SUPER_ADMIN" | "ADMIN" | "USER";

export interface IParams {
  _id: string;
  fields: string;
}
