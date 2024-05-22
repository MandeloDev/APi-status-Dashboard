// import axios from 'axios';

// const API_BASE_URL = 'https://feed.unbxd.io/api/auk-prod-wbwr-vans-shopify48861701268322/catalog/status';


// export const fetchStatus = async () => {
//   const response = await axios.get(`${API_BASE_URL}/status`);
//   return response.data;
// };


// const API_BASE_URL = 'https://feed.unbxd.io/api/auk-prod-wbwr-vans-shopify48861701268322/catalog';

// export const fetchStatus = async () => {
//   const response = await fetch(`${API_BASE_URL}/status`);
//   if (!response.ok) {
//     throw new Error('Network response was not ok');
//   }
//   return response.json();
// };


// const API_BASE_URL = 'https://feed.unbxd.io/api/auk-prod-wbwr-vans-shopify48861701268322/catalog';

// export const fetchStatus = async () => {
//   try {
//     const response = await fetch(`${API_BASE_URL}/status`);
//     if (!response.ok) {
//       throw new Error('Network response was not ok');
//     }
//     return response.json();
//   } catch (error) {
//     throw new Error('Failed to fetch data from the API: ' + error.message);
//   }
// };




export const UNBXD_API = async (endpoint: string, method = 'GET') => {
    const BASE_URL = 'https://feed.unbxd.io/api/auk-prod-wbwr-vans-shopify48861701268322/catalog';
    const url = `${BASE_URL}/${endpoint}`;
  
    try {
      const response = await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Failed to fetch data:', error);
      throw error;
    }
  };
  