export interface IBookingMainParams {
  movieId: string;
  movieName: string;
  movieImage: string;
  userId: string;
  seatArr: string[];
  ticketType: string;
  price: number;
  time: string;
  cinemaLocation: string;
  voucherId?: string;
  status: string;
  listAllSeat: any;
  theaterId: string;
  paymentMethod: string;
}

export interface IBookingReq {
  movieId: string;
  movieName: string;
  movieImage: string;
  userId: string;
  seatNumbers: string[];
  ticketType: string;
  price: number;
  bookingDate: string;
  cinemaLocation: string;
  voucherId: string;
  status: string;
}

export interface IUpdateSeatReq {
  movieId: string;
  showTime: string;
  bookedSeats: string[];
  theaterId: string;
}
