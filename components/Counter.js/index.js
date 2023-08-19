import React, { useState } from "react";
import { useSelector } from "react-redux";

export default function Counter() {
  const counter = useSelector((state) => state.counter.value);
  return <div>{counter}</div>;
}
