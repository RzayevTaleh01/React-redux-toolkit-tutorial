import React from "react";
import { createSlice } from "@reduxjs/toolkit";

export const Counter = createSlice({
  name: "counter", //statein adi
  initialState: { //statein ilkin deyeri
    value: 10,
  },
  reducers: { //state ile aparacigimiz emeliyyatlar
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state += action.payload;
    },
  },
});
export const {increment,decrement,incrementByAmount}  = Counter.actions

export default Counter.reducer;