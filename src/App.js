import React, { useEffect, useState } from 'react';
import TransactionTable from './TransactionTable';
import TransactionSubmitForm from './TransactionSubmitForm';
import TransactionSearchBar from './TransactionSearchBar';
import fetchTransactions from './api';

function App() {
  const [transactions, setTransactions] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetchTransactions()
      .then((data) => setTransactions(data))
      .catch((error) => console.error('Error fetching transactions:', error));
  }, []);

  const addTransaction = (newTransaction) => {
    setTransactions([...transactions, newTransaction]);
  };

  const deleteTransaction = (transactionId) => {
    const updatedTransactions = transactions.filter(
      (transaction) => transaction.id !== transactionId
    );
    setTransactions(updatedTransactions);
  };

  const filteredTransactions = transactions.filter((transaction) =>
    transaction.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="App">
      <header className="App-header"><strong>BANK OF FLATIRON</strong></header>
      <TransactionSubmitForm addTransaction={addTransaction} />
      <TransactionSearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <TransactionTable transactions={filteredTransactions} onDeleteTransaction={deleteTransaction} />
    </div>
  );
}

export default App;





