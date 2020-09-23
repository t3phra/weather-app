import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import dayjs from 'dayjs';

import Modal from '../../UI/Modal/Modal';
import WeatherCard from '../../components/WeatherCard/WeatherCard';
import AddNewCity from '../../components/AddNewCity/AddNewCity';
import { INPUT_PLACEHOLDER, DATE_TEMPLATE } from '../../constants/constants';
import { searchCity, setGeoModalStatus } from '../../store/geocoder/geocoder.actions';
import { addNewCity, removeCity } from '../../store/cities/cities.actions';
import { selectIsGeoModalOpen, selectLocation } from '../../store/geocoder/geocoder.selectors';
import { selectCities } from '../../store/cities/cities.selectors';
import { selectIsLoading } from '../../store/async-status/async-status.selectors';
import {
  Content,
  Title,
  Date,
  Input,
  CardsContainer,
  AddBtn,
} from './MainPage.style';

const MainPage: React.FC = () => {
  const [inputValue, setInputValue] = useState<string>('');
  const dispatch = useDispatch();

  const location = useSelector(selectLocation);
  const cities = useSelector(selectCities);
  const isGeoModalOpen = useSelector(selectIsGeoModalOpen);
  const isLoading = useSelector(selectIsLoading);

  const date = dayjs().format(DATE_TEMPLATE);

  const searchCityHandler = () => dispatch(searchCity(inputValue));

  const inputChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value.trimLeft());
  };

  const keyPressedHandler = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      searchCityHandler();
    }
  };

  const closeModalHandler = () => {
    setInputValue('');
    dispatch(setGeoModalStatus(false));
  };

  const addCityHandler = () => {
    dispatch(addNewCity({
      location: {
        latitude: location.latitude,
        longitude: location.longitude,
      },
      city: location.city,
      cityId: location.cityId,
      country: location.country,
    }));
    setInputValue('');
    dispatch(setGeoModalStatus(false));
  };

  const removeCityHandler = (cityId: number) => dispatch(removeCity(cityId));

  return (
    <Content>
      { isGeoModalOpen
        && (
        <Modal
          onCloseModal={closeModalHandler}
          isLoading={isLoading}
        >
          <AddNewCity
            city={location.city}
            onCloseModal={closeModalHandler}
            onAddCity={addCityHandler}
          />
        </Modal>
        )}
      <Date>{date}</Date>
      <Title>Current Weather</Title>
      <div>
        <Input
          placeholder={INPUT_PLACEHOLDER}
          value={inputValue}
          onChange={(event) => inputChangeHandler(event)}
          onKeyPress={(event) => keyPressedHandler(event)}
        />
        <AddBtn
          onClick={searchCityHandler}
        >
          +
        </AddBtn>
      </div>
      <CardsContainer>
        {cities.map((cityData) => (
          <WeatherCard
            key={cityData.cityId}
            city={cityData.city}
            country={cityData.country}
            temperature={cityData.weather?.temperature || 0}
            weatherId={cityData.weather?.weatherId || 0}
            onRemoveCity={() => removeCityHandler(cityData.cityId)}
          />
        ))}
      </CardsContainer>
    </Content>
  );
};

export default MainPage;
