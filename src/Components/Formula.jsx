import React from "react";
import { useState, useRef } from "react";

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
  const [emoji, setEmoji] = useState("");
  const [messageColor, setMessageColor] = useState();
  const hMessage = useRef();
  const wMessage = useRef();

  const calculateBMI = () => {
    if (weight && height) {
      const heightMeters = height / 100;
      const calculatedBMI = weight / heightMeters ** 2;
      setBmi(calculatedBMI.toFixed(2));

      if (calculatedBMI < 16.0) {
        setMessage("Severly Underweight");
        setEmoji("😔");
        setMessageColor("text-yellow-500");
      } else if (calculatedBMI > 16.0 && calculatedBMI < 18.4) {
        setMessage("Your are underweight");
        setEmoji("😟");
        setMessageColor("text-yellow-700");
      } else if (calculatedBMI > 18.5 && calculatedBMI < 24.9) {
        setMessage("Your are Normal");
        setEmoji("😊");
        setMessageColor("text-green-500");
      } else if (calculatedBMI > 25.0 && calculatedBMI < 29.9) {
        setMessage("Your are overweight");
        setEmoji("😐");
        setMessageColor("text-orange-500");
      } else if (calculatedBMI > 30.0 && calculatedBMI < 34.9) {
        setMessage("Your are Moderately Obese");
        setEmoji("😕");
        setMessageColor("text-red-500");
      } else if (calculatedBMI > 35.0 && calculatedBMI < 39.9) {
        setMessage("Your are Severly Obese");
        setEmoji("😟");
        setMessageColor("text-red-600");
      } else {
        setMessage("Your are Morbidly Obese");
        setEmoji("😢");
        setMessageColor("text-red-700");
      }
      wMessage.current.value = "";
      hMessage.current.value = "";
    }
  };
  return (
    <>
      <div className="border border-none h-auto w-11/12 md:w-8/12 lg:w-6/12 xl:w-4/12 bg-green-600 rounded-lg shadow-md shadow-white hover:shadow-xl hover:shadow-white mx-auto font-bold p-6">
        <div className="flex flex-col space-y-4">
          <label htmlFor="weight" className="text-white">
            Enter weight (kg):
          </label>
          <input
            type="number"
            placeholder="Enter your weight"
            className="border rounded-lg text-orange-600 border-none p-2 w-full"
            ref={wMessage}
            onChange={(e) => setWeight(e.target.value)}
          />
          <label htmlFor="height" className="text-white">
            Enter Height (cm):
          </label>
          <input
            type="number"
            placeholder="Enter your height"
            ref={hMessage}
            className="border rounded-lg text-orange-600 border-none p-2 w-full"
            onChange={(e) => setHeight(e.target.value)}
          />
          <button
            onClick={calculateBMI}
            className="mt-4 border rounded-lg w-full text-white bg-red-700 border-none py-2"
          >
            Calculate
          </button>

          {bmi && (
            <div className="text-center text-white mt-6">
              <h1>
                Your current BMI is:{" "}
                <span className={`${messageColor}`}>{bmi}</span>
              </h1>
              <h1 className={`text-xl font-bold ${messageColor}`}>{message}</h1>
              <h1 className="text-3xl font-bold">{emoji}</h1>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Formula;
