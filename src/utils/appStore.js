import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import movieSReducer from "./moviesSlice";
import gptReducer from "./gptSlice";
import configReducer from "./configSlice";
import tvReducer from "./tvshows";

const store = configureStore({
  reducer: {
    user: userReducer,
    movies: movieSReducer,
    gpt: gptReducer,
    config: configReducer,
    tv: tvReducer,
  },
});

export default store;
