import React, { useState } from "react";

function Calo() {
  const [weight, setWeight] = useState("");
  const [weightUnit, setWeightUnit] = useState("kg");
  const [age, setAge] = useState("0-4 months");
  const [error, setError] = useState(false);
  const [RER, setRER] = useState(null);
  const [MER, setMER] = useState(null);

  const calculate = () => {
    const weightValue = parseFloat(weight);

    if (isNaN(weightValue) || weightValue <= 0) {
      setError(true);
      return;
    }

    setError(false);

    let weightInKg = weightUnit === "lbs" ? weightValue / 2.2 : weightValue;
    const calculatedRER = 70 * Math.pow(weightInKg, 0.75);
    setRER(calculatedRER.toFixed(2));

    let coefficient;
    switch (age) {
      case "0-4 months":
        coefficient = 3;
        break;
      case "4-adult":
        coefficient = 2;
        break;
      case "neutered":
        coefficient = 1.6;
        break;
      case "non-neutered":
        coefficient = 1.8;
        break;
      case "weight-loss":
        coefficient = 1;
        break;
      case "weight-gain":
        coefficient = 1.7;
        break;
      default:
        coefficient = 1;
    }

    const calculatedMER = calculatedRER * coefficient;
    setMER(calculatedMER.toFixed(2));
  };

  return (
    <div className="max-w-xl mx-auto my-10 p-5 bg-rose-200 rounded-lg shadow-lg text-center font-sans">
      <h2 className="text-2xl mb-4 font-bold text-gray-800">
        Cat Calorie Calculator
      </h2>
      <div className="mb-7">
        <label className="block font-bold mb-1 text-gray-700" htmlFor="weight">
          Cat’s weight:
        </label>
        <input
          className="w-1/2 p-2 border-2 rounded-lg"
          type="number"
          id="weight"
          placeholder="Enter weight"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        />
        <select
          className="w-1/2 p-2 border-2 rounded-lg mt-2"
          id="weight-unit"
          value={weightUnit}
          onChange={(e) => setWeightUnit(e.target.value)}
        >
          <option value="kg">kg</option>
          <option value="lbs">lbs</option>
        </select>
      </div>
      <div className="mb-4">
        <label className="block font-bold mb-1 text-gray-700" htmlFor="age">
          Cat’s age/condition:
        </label>
        <select
          className="w-1/2 p-2 border-2 rounded-lg"
          id="age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        >
          <option value="0-4 months">Kitten (0-4 months)</option>
          <option value="4-adult">Kitten (4 months to adult)</option>
          <option value="neutered">Neutered Adult</option>
          <option value="non-neutered">Non-Neutered Adult</option>
          <option value="weight-loss">Weight Loss</option>
          <option value="weight-gain">Weight Gain</option>
        </select>
      </div>
      <button
        className="bg-brown-800 text-white py-2 px-4 rounded-lg hover:bg-brown-900"
        onClick={calculate}
      >
        Calculate
      </button>

      {error && (
        <div className="bg-red-500 text-white p-2 rounded-lg mt-4">
          Please enter a valid input.
        </div>
      )}

      {RER && MER && (
        <div className="bg-gradient-to-r from-brown-600 to-brown-500 text-white p-4 rounded-lg mt-4 shadow-lg">
          <p>
            <strong>RER:</strong> <span>{RER}</span> kcal/day
          </p>
          <p>
            <strong>MER:</strong> <span>{MER}</span> kcal/day
          </p>
        </div>
      )}
    </div>
  );
}

export default Calo;
