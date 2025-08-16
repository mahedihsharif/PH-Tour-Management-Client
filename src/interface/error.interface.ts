interface IErrorData {
  err?: null;
  errorSources?: [];
  message: string;
  stack?: null;
  success: boolean;
}

export interface IErrorResponse {
  data: IErrorData;
  status: number;
}
