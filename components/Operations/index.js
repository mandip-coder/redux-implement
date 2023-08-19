import { decrement, increment } from "@/store/counterslice";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Operations() {
  const counter = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <div>
      <button onClick={() => dispatch(increment())}>+1</button>
      <button onClick={() => dispatch(decrement())}>-1</button>
    </div>
  );
}
