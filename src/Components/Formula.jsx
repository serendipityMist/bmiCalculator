import React, { useState, useRef, useCallback } from "react";

//To convert cm to m , divide cm by 100
/**
 *
 *  Examples: weight 59 kg
 *  height: 170 cm / 1.70 m
 * 1.70**2 = 2.89
 * bmi = 20.4152249
 *
 *
 * Weight:
 * lb = 0.45359237 kg
 * 
 * to convert lbs into kg
 * divide by 2.205

 */
function Formula() {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBmi] = useState(null);
  const [message, setMessage] = useState("");
  const [emoji, setEmoji] = useState("");

  const [messageColor, setMessageColor] = useState("");
  const [feet, setFeet] = useState(false);
  const [pounds, setPounds] = useState(false);
  const hMessage = useRef();
  const wMessage = useRef();

  const valCheck = useCallback(() => {
    if (weight && height) {
      let calculatedBMI = 0;

      if (pounds) {
        const weightKg = weight / 2.205;
        const heightMeters = feet ? height / 3.281 : height / 100;
        calculatedBMI = weightKg / heightMeters ** 2;
      } else {
        const heightMeters = feet ? height / 3.281 : height / 100;
        calculatedBMI = weight / heightMeters ** 2;
      }

      setBmi(calculatedBMI.toFixed(2));

      if (calculatedBMI < 16.0) {
        setMessage("Severely Underweight");
        setEmoji("😔");
        setMessageColor("text-yellow-500");
      } else if (calculatedBMI >= 16.0 && calculatedBMI < 18.4) {
        setMessage("You are underweight");
        setEmoji("😟");
        setMessageColor("text-yellow-700");
      } else if (calculatedBMI >= 18.5 && calculatedBMI < 24.9) {
        setMessage("You are Normal");
        setEmoji("😊");
        setMessageColor("text-green-500");
      } else if (calculatedBMI >= 25.0 && calculatedBMI < 29.9) {
        setMessage("You are overweight");
        setEmoji("😐");
        setMessageColor("text-orange-500");
      } else if (calculatedBMI >= 30.0 && calculatedBMI < 34.9) {
        setMessage("You are Moderately Obese");
        setEmoji("😕");
        setMessageColor("text-red-500");
      } else if (calculatedBMI >= 35.0 && calculatedBMI < 39.9) {
        setMessage("You are Severely Obese");
        setEmoji("😟");
        setMessageColor("text-red-600");
      } else {
        setMessage("You are Morbidly Obese");
        setEmoji("😢");
        setMessageColor("text-red-700");
      }

      wMessage.current.value = "";
      hMessage.current.value = "";
    }
  }, [feet, height, weight, pounds]);

  return (
    <>
      <div className="border border-none h-auto w-11/12 md:w-8/12 lg:w-6/12 xl:w-4/12 bg-green-400 rounded-lg shadow-md shadow-white hover:shadow-xl hover:shadow-white mx-auto font-bold p-6">
        <div className="flex flex-col space-y-4">
          <label htmlFor="weight" className="text-white">
            Enter weight ({pounds ? "lbs" : "kg"}):
          </label>
          <input
            type="number"
            placeholder="Enter your weight"
            className="border rounded-lg text-orange-600 border-none p-2 w-full"
            ref={wMessage}
            onChange={(e) => setWeight(e.target.value)}
          />
          <label htmlFor="height" className="text-white">
            Enter Height({feet ? "feet" : "cm"}):
          </label>
          <input
            type="number"
            placeholder="Enter your height"
            ref={hMessage}
            className="border rounded-lg text-orange-600 border-none p-2 w-full"
            onChange={(e) => setHeight(e.target.value)}
          />
          <button
            onClick={valCheck}
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
        <div className="flex justify-around mt-4">
          <div>
            <input
              type="checkbox"
              id="feet"
              onChange={() => setFeet((prev) => !prev)}
            />
            <label htmlFor="feet" className="text-white ml-2">
              Feet
            </label>
          </div>
          <div>
            <input
              type="checkbox"
              id="pounds"
              onChange={() => setPounds((prev) => !prev)}
            />
            <label htmlFor="pounds" className="text-white ml-2">
              Pounds
            </label>
          </div>
        </div>
      </div>
    </>
  );
}

export default Formula;
