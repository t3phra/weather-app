import { createReducer } from 'typesafe-actions';
import { CityReducerState } from '../store.types';
import {
  CityActionsAll, getWeather, getWeatherRequestFail, getWeatherRequestSuccess,
} from './city.actions';

const initialState: CityReducerState = {
  temperature: 0,
  weatherId: 0,
  isLoading: false,
  error: '',
};

const cityReducer = createReducer<CityReducerState, CityActionsAll>(initialState)
  .handleAction(getWeather, (state, action) => ({
    ...state,
    isLoading: true,
  }))
  .handleAction(getWeatherRequestSuccess, (state, action) => ({
    ...state,
    temperature: action.weatherData.temperature,
    weatherId: action.weatherData.weatherId,
    isLoading: false,
  }))
  .handleAction(getWeatherRequestFail, (state, action) => ({
    ...state,
    error: action.error,
    isLoading: false,
  }));

export default cityReducer;
