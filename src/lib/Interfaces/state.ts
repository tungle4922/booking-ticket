import { IBookingMainParams } from "@/models/booking";
import { IGetAllMovieRes } from "@/models/movie";

export interface IState {
  auth: {
    authInfo: {
      accessToken: string;
      userId: string;
    };
    userInfo: IUserInfo;
  };
  movies: {
    movieDetail: IGetAllMovieRes;
    bookingParams: IBookingMainParams;
  };
}

export interface IUserInfo {
  _id: string;
  username: string;
  email: string;
  fullName: string;
  dateOfBirth: string;
  gender: string;
  phoneNumber: string;
  address: string;
  password: string;
}
