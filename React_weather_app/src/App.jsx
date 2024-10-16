import React, { useState } from 'react';
import { TextField, Button, Container, Typography } from '@mui/material';
import WeatherCard from './components/WeatherCard';
import { fetchWeather } from './utils/fetchWeather';

const App = () => {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState('');

  const handleSearch = async () => {
    if (city.trim() === '') return;

    try {
        const data = await fetchWeather(city);  
        setWeatherData(data);
        setError('');
    } catch (error) {
        setError('City not found or something went wrong.');
    }
}

  return (
    <Container maxWidth="sm" style={{ marginTop: '50px', textAlign: 'center' }}>
      <Typography variant="h4" gutterBottom>Weather App</Typography>
      <TextField
        label="Enter City Name"
        variant="outlined"
        fullWidth
        value={city}
        onChange={(e) => setCity(e.target.value)}
        style={{ marginBottom: '20px' }}
      />
      <Button
        variant="contained"
        color="primary"
        onClick={handleSearch}
        style={{ marginBottom: '20px' }}
      >
        Get Weather
      </Button>

      {error && <Typography color="error">{error}</Typography>}

      {weatherData && <WeatherCard weatherData={weatherData} />}
    </Container>
  );
};

export default App;