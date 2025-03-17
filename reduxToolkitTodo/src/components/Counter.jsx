import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "../features/counter/counterSlice";

export function Counter() {
  const CounterValue = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <>
          <div>Counter : {CounterValue}</div>
          <br />
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </>
  );
}
