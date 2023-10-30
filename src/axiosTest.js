const axios = require('axios'); 
//created axiosTest file to check if the data was in fact fetching
axios.get('http://localhost:8001/comments')
  .then((response) => {
    console.log('Response data:', response.data);
  })
  .catch((error) => {
    console.error('Error:', error);
  });
