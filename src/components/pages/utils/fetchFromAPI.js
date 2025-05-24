// src/utils/fetchFromAPI.js
import axios from 'axios';

// Base URL for the YouTube v3.11 RapidAPI endpoint
const BASE_URL = 'https://youtube-v311.p.rapidapi.com';

// Replace "YOUR_KEY_HERE" with your actual RapidAPI key
const options = {
  method: 'GET',
  headers: {
    'x-rapidapi-key': 'fed70cf281msh0dc362b52b2727ep1778a5jsn25537df2dda2',
    'x-rapidapi-host': 'youtube-v311.p.rapidapi.com',
  },
};

// Generic fetch function: you pass the rest of the URL (e.g., "search?part=snippet&q=music")
export const fetchFromAPI = async (url) => {
  try {
    const { data } = await axios.get(`${BASE_URL}/${url}`, options);
    return data;
  } catch (error) {
    console.error('fetchFromAPI error:', error);
    return { items: [] };
  }
};
