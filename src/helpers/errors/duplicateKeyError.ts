import type { IErrorData } from "@/types/error.type";
import type { SerializedError } from "@reduxjs/toolkit";
import type { FetchBaseQueryError } from "@reduxjs/toolkit/query";

type RTKError = FetchBaseQueryError | SerializedError;

export const duplicateKeyError = (error: RTKError): IErrorData | null => {
  if (error && typeof error === "object" && "err" in error) {
    const err = error as FetchBaseQueryError;
    return err as unknown as IErrorData;
  }
  return null;
};
