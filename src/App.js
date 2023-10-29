import React, { useEffect, useState } from 'react';
import './App.css';
import TransactionTable from './TransactionTable';
import fetchTransactions from './api'; 

function App() {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    
    fetchTransactions()
      .then((data) => setTransactions(data))
      .catch((error) => console.error('Error fetching transactions:', error));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
      Code Challenge: Bank of Flatiron
</header>
      <TransactionTable transactions={transactions} />
    </div>
  );
}

export default App;

