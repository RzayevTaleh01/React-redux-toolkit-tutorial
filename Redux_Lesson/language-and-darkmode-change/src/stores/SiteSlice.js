import { createSlice } from "@reduxjs/toolkit";

export const SiteSlice = createSlice({
  name: "site",
  initialState: {
    dark: false,
    language: "az",
  },
  reducers: {
    setDarkMode: (state) => {
      state.dark = !state.dark;
    },
    setLanguage: (state, action) => {
      state.language = action.payload;
    },
  },
});

export const { setDarkMode, setLanguage } = SiteSlice.actions;

export default SiteSlice.reducer;
