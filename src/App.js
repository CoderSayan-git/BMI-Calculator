import React, { useMemo, useState } from "react";
import './App.css'

const App = () => {
  const [height, setHeight] = useState(100);
  const [weight, setWeight] = useState(40);

  function weightChange(event) {
    setWeight(event.target.value);
  }

  function heightChange(event) {
    setHeight(event.target.value);
  }

  const output = useMemo(() => {
    return ((weight * 10000) / (height * height)).toFixed(2);
  }, [weight, height]);

  const bmiCategory = useMemo(() => {
    const bmi = parseFloat(output);
    if (bmi < 18.5) return { category: "Underweight", color: "green" };
    else if (bmi < 25) return { category: "Normal weight", color: "#8E44AD" };
    else if (bmi < 30) return { category: "Overweight", color: "orange" };
    else return { category: "Obese", color: "red" };
  }, [output]);

  return (
    <main>
      <div className="heading">
        <h1> Project 1 : BMI Calculator </h1>
      </div>

      <div className="input-section">
        <p className="slider-output">Weight : {weight} kg</p>
        <input
          className="input-slider"
          type="range"
          min="40"
          max="150"
          step="1"
          value={weight}
          onChange={weightChange}
        />

        <p className="slider-output">Height : {height} cm</p>
        <input
          className="input-slider"
          type="range"
          min="100"
          max="250"
          step="1"
          value={height}
          onChange={heightChange}
        />
      </div>

      <div className="output-section">
        <p>Your BMI is </p>
        <p className="output">{output}</p>
        <br></br>
        <p className="category" style={{ color: bmiCategory.color }}>
          Category : {bmiCategory.category}
        </p>
      </div>
      
      <p class="credit">Made with ❤️ by <i><strong>Sayan Dhara</strong></i></p>
    </main>
  )
}

export default App;
