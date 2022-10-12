import React from "react";
import { useDispatch } from "react-redux";
import { increment,decrement } from "../stores/Counter";

export default function CounterActions() {
    const dispatch = useDispatch(); //Slicedaki reducerleri cekmek ucun
  return (
    <div>
      <button onClick={() => dispatch(increment())}>Artir</button>
      <button onClick={() => dispatch(decrement())}>Azalt</button>
    </div>
  );
}
