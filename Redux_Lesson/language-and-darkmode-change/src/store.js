import { configureStore } from "@reduxjs/toolkit";
import SiteReducer from "./stores/SiteSlice";

export const store = configureStore({
  reducer:{
    site: SiteReducer
  }
})