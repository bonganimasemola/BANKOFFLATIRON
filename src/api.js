const API = 'http://localhost:8001';

const fetchTransactions = async () => {
  try {
    const response = await fetch(`${API}/transactions`);
    if (!response.ok) {
      throw new Error(`Failed to fetch data: ${response.status} ${response.statusText}`);
    }
   //console.log(data);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    return [];
  }
};

export default fetchTransactions; 
