import logo from './logo.svg';
import './App.css';

function App() {
  // app.js
  // Get input values
  let principal = parseFloat(document.getElementById("principal").value);
  let rate = parseFloat(document.getElementById("rate").value);
  let tenure = parseFloat(document.getElementById("tenure").value);

  // Convert annual rate to monthly and tenure to months
  let monthlyRate = rate / 12 / 100;
  let months = tenure * 12;

  // EMI Formula
  let emi =
    (principal * monthlyRate * Math.pow(1 + monthlyRate, months)) /
    (Math.pow(1 + monthlyRate, months) - 1);

  // Total amount & interest
  let totalPayment = emi * months;
  let totalInterest = totalPayment - principal;

  // Display results
  document.getElementById("result").innerHTML = `
    <h3>EMI Details:</h3>
    <p>Monthly EMI: ₹${emi.toFixed(2)}</p>
    <p>Total Interest: ₹${totalInterest.toFixed(2)}</p>
    <p>Total Payment: ₹${totalPayment.toFixed(2)}</p>
  `;
}


export default App;
