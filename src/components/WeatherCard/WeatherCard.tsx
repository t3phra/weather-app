import React from 'react';

import Loader from '../../UI/Loader/Loader';
import {
  Card, City, Country, DeleteCardBtn, Location, Temperature, WeatherIcon,
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
    <DeleteCardBtn onClick={onRemoveCity}>x</DeleteCardBtn>
    { weatherId || temperature ? (
      <>
        <WeatherIcon className={`owf owf-${weatherId} owf-5x`} />
        <Temperature>
          {temperature}
          {' '}
          °
        </Temperature>
      </>
    ) : <Loader />}
    <Location>
      <City>{city}</City>
      <Country>{country}</Country>
    </Location>
  </Card>
);

export default WeatherCard;
