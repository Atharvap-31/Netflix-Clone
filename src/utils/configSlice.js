import { createSlice } from "@reduxjs/toolkit";

const configSlice = createSlice({
  name: "config",
  initialState: {
    language: "en",
  },
  reducers: {
    languageToggle: (state, action) => {
      state.language = action.payload;
    },
  },
});

export const { languageToggle } = configSlice.actions;

export default configSlice.reducer;
