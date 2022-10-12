import { configureStore } from '@reduxjs/toolkit'
import counterReducer from "./stores/Counter"
export const store = configureStore({
  reducer: {
    counter: counterReducer
  },
})