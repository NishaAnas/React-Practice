import axios from 'axios';
import { BASE_URL, API_KEY } from '../config/apiConfig';

export const fetchWeather = async (city) => {
  try {
    const response = await axios.get(`${BASE_URL}weather?q=${city}&appid=${API_KEY}&units=metric`);
    return response.data;
  } catch (error) {
    console.error("Error fetching weather data:", error);
    throw error;
  }
};