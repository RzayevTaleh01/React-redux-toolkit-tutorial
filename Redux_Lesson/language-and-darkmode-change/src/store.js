import { configureStore } from '@reduxjs/toolkit'
import counterReducer from "./stores/CounterSlice"
export const store = configureStore({
  reducer: {
    counter_store: counterReducer //counter store qoyma meqsedim sadece actionsdaki valuenin hardan geldiyini yoxlamaqdir
  },
})