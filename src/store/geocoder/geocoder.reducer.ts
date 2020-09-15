import { createReducer } from 'typesafe-actions';
import { GeocoderReducerState } from '../store.types';
import {
  GeocoderActionsAll,
  searchCityRequestFail,
  searchCityRequestSuccess,
  searchCity,
} from './geocoder.actions';

const initialState: GeocoderReducerState = {
  city: '',
  country: '',
  latitude: 0,
  longitude: 0,
  isLoading: false,
  error: '',
};

const geocoderReducer = createReducer<GeocoderReducerState, GeocoderActionsAll>(initialState)
  .handleAction(searchCity, (state, action) => ({
    ...state,
    isLoading: true,
  }))
  .handleAction(searchCityRequestSuccess, (state, action) => ({
    ...state,
    city: action.cityData.city,
    country: action.cityData.country,
    latitude: action.cityData.latitude,
    longitude: action.cityData.longitude,
    isLoading: false,
  }))
  .handleAction(searchCityRequestFail, (state, action) => ({
    ...state,
    error: action.error,
    isLoading: false,
  }));

export default geocoderReducer;
