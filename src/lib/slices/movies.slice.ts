import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    movieDetail: null,
    bookingParams: null,
  },
  reducers: {
    getMovieDetailSuccess: (state, action) => {
      state.movieDetail = action.payload;
    },
    getBookingParamsSuccess: (state, action) => {
      state.bookingParams = action.payload;
    },
  },
});

export const { getMovieDetailSuccess, getBookingParamsSuccess } =
  moviesSlice.actions;

export default moviesSlice.reducer;
