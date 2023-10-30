import React, { useEffect, useState } from 'react';
import TransactionTable from './TransactionTable';
import TransactionSubmitForm from './TransactionSubmitForm';
import fetchTransactions from './api';

function App() {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    fetchTransactions()
      .then((data) => setTransactions(data))
      .catch((error) => console.error('Error fetching transactions:', error));
  }, []);

  const addTransaction = (newTransaction) => {
    
    setTransactions([...transactions, newTransaction]);
  };

  return (
    <div className="App">
      <header className="App-header">Bank of Flatiron</header>
      <TransactionSubmitForm addTransaction={addTransaction} />
      <TransactionTable transactions={transactions} />
    </div>
  );
}

export default App;


