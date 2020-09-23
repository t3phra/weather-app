import { createReducer } from 'typesafe-actions';
import { CitiesReducerState } from './cities.types';
import {
  addNewCity, CitiesActionsAll, getWeatherRequestSuccess, removeCity,
} from './cities.actions';

const initialState: CitiesReducerState = {
  cities: {},
};

const citiesReducer = createReducer<CitiesReducerState, CitiesActionsAll>(initialState)
  .handleAction(addNewCity, (state, action) => ({
    ...state,
    cities: {
      ...state.cities,
      [action.city.cityId]: action.city,
    },
  }))
  .handleAction(removeCity, (state, action) => ({
    ...state,
    cities: Object.values(state.cities).filter((city) => city.cityId !== action.cityId),
  }))
  .handleAction(getWeatherRequestSuccess, (state, action) => {
    const enhancedCities = { ...state.cities };
    action.weatherData.forEach((data) => {
      if (data.cityId) {
        enhancedCities[data.cityId].weather = {
          temperature: Math.floor(data.temperature),
          weatherId: data.weatherId,
        };
      }
    });
    return {
      ...state,
      cities: {
        ...state.cities,
        ...enhancedCities,
      },
    };
  });

export default citiesReducer;
