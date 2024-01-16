import { createSlice } from "@reduxjs/toolkit";

const tvShows = createSlice({
  name: "tv",
  initialState: {
    tvShows: false,
  },
  reducers: {
    toggleTvShows: (state) => {
      state.tvShows = !state.tvShows;
    },
  },
});

export const { toggleTvShows } = tvShows.actions;

export default tvShows.reducer;
