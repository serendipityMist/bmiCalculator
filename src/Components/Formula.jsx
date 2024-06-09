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

  const calculateBMI = () => {
    if (weight && height) {
      const heightMeters = height / 100;
      const calculatedBMI = weight / heightMeters ** 2;
      setBmi(calculatedBMI.toFixed(2));

      if (calculatedBMI < 18.5) {
        setMessage("You are underweight");
      }
    }
  };
  return (
    <>
      <div className="border border-black h-40 w-1/2 mx-auto">
        <label htmlFor="weight">Enter weight(kg)</label>
        <input
          type="number"
          placeholder="Enter your weight"
          className="border rounded-lg m-1 text-orange-600"
          onChange={(e) => setWeight(e.target.value)}
        />
        <label htmlFor="height">Height(cm)</label>
        <input
          type="number"
          placeholder="Enter your height"
          onChange={(e) => setHeight(e.target.value)}
        />
      </div>
      <button onClick={calculateBMI}>Calculate</button>
      <h1></h1>
      <div>
        {bmi && (
          <div>
            <h1>Your current BMI is: {bmi}</h1>
            <h1>{message}</h1>
          </div>
        )}
      </div>
    </>
  );
}

export default Formula;
