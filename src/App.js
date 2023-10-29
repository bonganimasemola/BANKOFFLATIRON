import React from 'react';
import './App.css';
import TransactionTable from './TransactionTable'; // Import the TransactionTable component

const transactions = [
  // Include your transaction data here
  // Make sure it matches the structure of your JSON data
];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <em>DINNER IS SERVED</em>
      </header>
      <TransactionTable transactions={transactions} /> {/* Pass transactions as a prop */}
    </div>
  );
}

export default App;

