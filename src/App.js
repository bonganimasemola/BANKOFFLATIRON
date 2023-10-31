import React, { useEffect, useState } from 'react';
import TransactionTable from './TransactionTable';
import TransactionSubmitForm from './TransactionSubmitForm';
import TransactionSearchBar from './TransactionSearchBar';
import fetchTransactions from './api';

function App() {
  const [transactions, setTransactions] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOrder, setSortOrder] = useState('asc'); 
  const [sortBy, setSortBy] = useState('description'); 

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

  const sortTransactions = () => {
    const sortedTransactions = [...transactions].sort((a, b) => {
      const aValue = a[sortBy].toLowerCase();
      const bValue = b[sortBy].toLowerCase();

      if (aValue < bValue) {
        return sortOrder === 'asc' ? -1 : 1;
      }
      if (aValue > bValue) {
        return sortOrder === 'asc' ? 1 : -1;
      }
      return 0;
    });

    setTransactions(sortedTransactions);
  };

  const toggleSortOrder = () => {
    setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
  };

  const handleSortByChange = (event) => {
    setSortBy(event.target.value);
  };

  const filteredTransactions = transactions.filter((transaction) =>
    transaction.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="App">
      <header className="App-header">Bank of Flatiron</header>
      <TransactionSubmitForm addTransaction={addTransaction} />
      <TransactionSearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

      <div>
        <label>
          Sort by:
          <select value={sortBy} onChange={handleSortByChange}>
          <option value="description">Description</option>
          <option value="category">Category</option>
          </select>
        </label>
        <button onClick={sortTransactions}>
          Sort {sortOrder === 'asc' ? 'Ascending' : 'Descending'}
        </button>
      </div>

      <TransactionTable transactions={filteredTransactions} onDeleteTransaction={deleteTransaction} />
    </div>
  );
}

export default App;






