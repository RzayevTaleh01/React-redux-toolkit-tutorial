import React from "react";
import { useDispatch } from "react-redux";
import {
  increment,
  decrement,
  incrementByAmount,
  decrementByAmount,
} from "../stores/CounterSlice";

export default function CounterActions() {
  const dispatch = useDispatch(); //Slicedaki reducerleri cekmek ucun
  return (
    <div>
      <button onClick={() => dispatch(decrementByAmount(4))}>-4</button>
      <button onClick={() => dispatch(increment())}>Artir</button>
      <button onClick={() => dispatch(decrement())}>Azalt</button>
      <button onClick={() => dispatch(incrementByAmount(4))}>+4</button>
    </div>
  );
}
