import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import dayjs from 'dayjs';

import WeatherCard from '../../components/WeatherCard/WeatherCard';
import {
  Content, Title, Date, Input, AddBtn,
} from './MainPage.style';
import { getWeather } from '../../store/city/city.actions';
import { selectLocation } from '../../store/geocoder/geocoder.selectors';
import { selectTemperature, selectWeatherId } from '../../store/city/city.selectors';
import { searchCity } from '../../store/geocoder/geocoder.actions';

const MainPage: React.FC = () => {
  const [inputValue, setInputValue] = useState<string>('');
  const dispatch = useDispatch();

  const location = useSelector(selectLocation);
  const temperature = useSelector(selectTemperature);
  const weatherId = useSelector(selectWeatherId);

  const date = dayjs().format('MMMM D, YYYY');

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        dispatch(getWeather(position.coords.latitude, position.coords.longitude));
      },
      (error) => {
        console.error(`Error ${error.code}: ${error.message}`);
      },
    );
  }, []);

  const addCityHandler = () => {
    if (inputValue.trim()) {
      dispatch(searchCity(inputValue));
      dispatch(getWeather(location.latitude, location.longitude));
    }
  };

  const inputChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const keyPressedHandler = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      addCityHandler();
    }
  };

  return (
    <Content>
      <Date>{date}</Date>
      <Title>Current Weather</Title>
      <div>
        <Input
          placeholder="Enter the name of the city..."
          value={inputValue}
          onChange={(event) => inputChangeHandler(event)}
          onKeyPress={(event) => keyPressedHandler(event)}
        />
        <AddBtn
          onClick={addCityHandler}
        >
          +
        </AddBtn>
      </div>
      <WeatherCard
        city={location.city}
        country={location.country}
        temperature={temperature}
        weatherId={weatherId}
      />
    </Content>
  );
};

export default MainPage;
