import React from 'react';

import {
  Card, DeleteCardBtn, Temperature, Location, City, Country,
} from './WeatherCard.style';

interface WeatherCardProps {
  city: string
  country: string
  temperature: number
  weatherId: number
  onRemoveCity: () => void
}

const WeatherCard: React.FC<WeatherCardProps> = ({
  weatherId, temperature, city, country, onRemoveCity,
}) => (
  <Card>
    <DeleteCardBtn onClick={() => onRemoveCity()}>x</DeleteCardBtn>
    <i className={`owf owf-${weatherId} owf-5x`} style={{ color: '#412c63' }} />
    <Temperature>
      {temperature}
      {' '}
      °
    </Temperature>
    <Location>
      <City>{city}</City>
      <Country>{country}</Country>
    </Location>
  </Card>
);

export default WeatherCard;
