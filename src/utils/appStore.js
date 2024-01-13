import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import movieSReducer from "./moviesSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    movies: movieSReducer,
  },
});

export default store;
