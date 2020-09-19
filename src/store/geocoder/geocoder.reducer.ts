import { createReducer } from 'typesafe-actions';
import { GeocoderReducerState } from './geocoder.types';
import {
  clearSearchCityData,
  GeocoderActionsAll,
  searchCityRequestSuccess,
} from './geocoder.actions';

const initialState: GeocoderReducerState = {
  city: '',
  cityId: 0,
  country: '',
  latitude: 0,
  longitude: 0,
};

const geocoderReducer = createReducer<GeocoderReducerState, GeocoderActionsAll>(initialState)
  .handleAction(searchCityRequestSuccess, (state, action) => ({
    ...state,
    city: action.cityData.city,
    cityId: action.cityData.cityId,
    country: action.cityData.country,
    latitude: action.cityData.latitude,
    longitude: action.cityData.longitude,
  }))
  .handleAction(clearSearchCityData, (state, action) => ({
    city: '',
    cityId: 0,
    country: '',
    latitude: 0,
    longitude: 0,
  }));

export default geocoderReducer;
