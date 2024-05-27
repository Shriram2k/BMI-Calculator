import React, { useState } from "react";

const BMIApp = () => {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bmi, setBmi] = useState(null);
  const [bmiStatus, setBmiStatus] = useState();
  const [bgColor, setBgColor] = useState("#e17055");
  const [errorMsg, setErrorMsg] = useState("");

  const CalculateBmi = () => {
    const validHeight = /^\d+$/.test(height);
    const validWeight = /^\d+$/.test(weight);
    if (validHeight && validWeight) {
      const heightInMeters = height / 100;
      const bmiValue = weight / (heightInMeters * heightInMeters);
      setBmi(bmiValue.toFixed(2));
      if (bmiValue < 18.5) {
        setBmiStatus("Underweight");
        setBgColor("#fbc531");
      } else if (bmiValue >= 18.5 && bmiValue < 24.5) {
        setBmiStatus("Normal Weight");
        setBgColor("#4cd137");
      } else if (bmiValue >= 24.5 && bmiValue < 29.5) {
        setBmiStatus("Overweight");
        setBgColor("#f0932b");
      } else {
        setBmiStatus("Obese");
      }
      setErrorMsg("");
    } else {
      setBmi(null);
      setBmiStatus("");
      setBgColor("#e17055");
      setErrorMsg(
        "Please give the correct value in both height and weight field."
      );
    }
  };

  const clearAll = () => {
    setBmi(null);
    setBmiStatus("");
    setBgColor("#e17055");
    setHeight("")
    setWeight("")
  };
  return (
    <>
      <div className="bmi-container" style={{ backgroundColor: bgColor }}>
        <div className="box"></div>
        <div className="data">
          <h1>BMI Calculator</h1>
          {errorMsg && <p className="error">{errorMsg}</p>}
          <div className="input-container">
            <label htmlFor="height">Hight (CM):</label>
            <input
              type="text"
              value={height}
              id="height"
              onChange={(e) => setHeight(e.target.value)}
            />
          </div>
          <div className="input-container">
            <label htmlFor="weight">Weight (KG):</label>
            <input
              type="text"
              value={weight}
              id="weight"
              onChange={(e) => setWeight(e.target.value)}
            />
          </div>
          <button onClick={CalculateBmi}>Calculate BMI</button>
          <button onClick={clearAll}>Clear</button>
          {bmi !== null && (
            <div className="result">
              <p>Your BMI is {bmi}</p>
              <p>Status: {bmiStatus}</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default BMIApp;
