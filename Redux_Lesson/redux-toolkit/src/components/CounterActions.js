import React from "react";

export default function CounterActions({ setCount, count }) {
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Artir</button>
      <button onClick={() => setCount(count - 1)}>Azalt</button>
    </div>
  );
}
