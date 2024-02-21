"use client";
import React, { useState } from "react";

const ClientPage = () => {
  //create a counter state
  const [counter, setCounter] = useState(0);
  //create a function to increment the counter
  const incrementCounter = () => setCounter(counter + 1);

  return (
    <div>
      <h1 className="text-7xl mb-4 font-bold">{counter}</h1>

      <button className="btn btn-accent" onClick={incrementCounter}>
        increment
      </button>
    </div>
  );
};

export default ClientPage;
