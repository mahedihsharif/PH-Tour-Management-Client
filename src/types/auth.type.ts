//user response data types
interface Auth {
  provider: string;
  providerId: string;
}

//register or login response data
export interface IUserResponseData {
  name: string;
  email: string;
  role: string;
  isDeleted: boolean;
  isActive: string;
  auths: Auth[];
  isVerified: boolean;
  _id: string;
  createdAt: string;
  updatedAt: string;
}
//login response data
export interface ILoginResponseData {
  accessToken: string;
  refreshToken: string;
  user: IUserResponseData;
}
//registration post types
export interface IRegister {
  name: string;
  email: string;
  password: string;
}
//login post types
export interface ILogin {
  email: string;
  password: string;
}
export interface ISendOtp {
  email: string;
}

export interface IVerifyOtp {
  email: string;
  otp: string;
}
