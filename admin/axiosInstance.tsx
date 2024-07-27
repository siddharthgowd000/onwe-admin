import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_URL, // Make sure this is defined in your .env file
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosInstance;
