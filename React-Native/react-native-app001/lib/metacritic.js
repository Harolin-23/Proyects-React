import fetch from 'node-fetch';

const API_URL = 'https://www.omdbapi.com/?apikey=690d22ef&s=hola';

async function fetchData() {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Fetch error:', error);
  }
}


export default fetchData;