import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./slices/auth.slice";
import moviesSlice from "./slices/movies.slice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      auth: authSlice,
      movies: moviesSlice,
    },
  });
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
