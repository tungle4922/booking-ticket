export interface IGetAllMovieRes {
  _id?: string;
  title?: string;
  director?: string;
  genre?: string[];
  releaseDate?: string;
  duration?: number;
  cast?: string[];
  reviews?: IReview[];
  plot?: string;
  ticketPrice?: number;
  theaters?: string[];
  image?: string;
  bookings?: string[];
  ratings?: string[];
  __v?: number;
}

export interface IReview {
  content?: string;
  createdAt?: string;
  _id?: string;
}

export enum TypeMovie {
  showing,
  commingSoon,
}
