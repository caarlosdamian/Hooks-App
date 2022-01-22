import React from "react";
import { useCounter } from "../../hooks/useCounter";
import "./counter.css";
export const CounterWithCustomHook = () => {
  const { increment, decrement, state,reset } = useCounter(200);
  return (
    <>
      <h1>Counter with Hook: {state}</h1>
      <hr />
      <button className="btn btn-primary" onClick={() => increment(3)}>
        {" "}
        + 1
      </button>
      <button className="btn btn-secondary" onClick={reset}>
        {" "}
        Reset
      </button>
      <button className="btn btn-secondary" onClick={() => decrement(3)}>
        {" "}
        - 1
      </button>
    </>
  );
};
