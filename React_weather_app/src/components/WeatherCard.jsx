import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

const WeatherCard = ({ weatherData }) => {
  if (!weatherData) return null; // Don't render anything if no data

  return (
    <Card variant="outlined" style={{ marginTop: '20px' }}>
      <CardContent>
        <Typography variant="h5" component="div">
          {weatherData.name}, {weatherData.sys.country}
        </Typography>
        <Typography variant="h6">
          {weatherData.weather[0].description}
        </Typography>
        <Typography variant="h4" style={{ marginTop: '10px' }}>
          {weatherData.main.temp}°C
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Humidity: {weatherData.main.humidity}%
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Wind Speed: {weatherData.wind.speed} m/s
        </Typography>
      </CardContent>
    </Card>
  );
};

export default WeatherCard;
