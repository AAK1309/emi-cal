import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [principal, setPrincipal] = useState(100000);
  const [interestRate, setInterestRate] = useState(7); // Annual interest rate
  const [tenure, setTenure] = useState(12); // Tenure in months
  const [emi, setEmi] = useState(0);

  useEffect(() => {
    calculateEmi();
  }, [principal, interestRate, tenure]);

  const calculateEmi = () => {
    const monthlyInterestRate = interestRate / 12 / 100;
    const powerFactor = Math.pow(1 + monthlyInterestRate, tenure);
    const calculatedEmi = (principal * monthlyInterestRate * powerFactor) / (powerFactor - 1);
    setEmi(calculatedEmi.toFixed(2)); // Format to 2 decimal places
  };

  return (
    <div className="App">
      <h1>EMI Calculator</h1>
      <div>
        <label>Principal Amount:</label>
        <input
          type="number"
          value={principal}
          onChange={(e) => setPrincipal(parseFloat(e.target.value))}
        />
      </div>
      <div>
        <label>Annual Interest Rate (%):</label>
        <input
          type="number"
          value={interestRate}
          onChange={(e) => setInterestRate(parseFloat(e.target.value))}
        />
      </div>
      <div>
        <label>Loan Tenure (Months):</label>
        <input
          type="number"
          value={tenure}
          onChange={(e) => setTenure(parseFloat(e.target.value))}
        />
      </div>
      <h2>Monthly EMI: ₹{emi}</h2>
    </div>
  );
}

export default App;