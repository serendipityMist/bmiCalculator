import React from "react";
import { useState } from "react";

//To convert cm to m , divide cm by 100
/**
 *
 *  Examples: weight 59 kg
 *  height: 170 cm / 1.70 m
 * 1.70**2 = 2.89
 * bmi = 20.4152249
 */
function Formula() {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBmi] = useState(null);
  const [message, setMessage] = useState("");
  return (
    <>
      <div className="border border-black h-40 w-1/2 mx-auto"></div>
    </>
  );
}

export default Formula;
