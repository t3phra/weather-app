import { createReducer } from 'typesafe-actions';
import { GeocoderReducerState } from './geocoder.types';
import {
  clearSearchCityData,
  GeocoderActionsAll,
  searchCityRequestSuccess,
  setGeoModalStatus,
} from './geocoder.actions';

const initialState: GeocoderReducerState = {
  city: '',
  cityId: 0,
  country: '',
  location: {
    latitude: 0,
    longitude: 0,
  },
  isGeoModalOpen: false,
};

const geocoderReducer = createReducer<GeocoderReducerState, GeocoderActionsAll>(initialState)
  .handleAction(searchCityRequestSuccess, (state, action) => ({
    ...state,
    ...action.cityData,
    location: {
      ...action.cityData.location,
    },
  }))
  .handleAction(clearSearchCityData, (state, action) => ({
    ...initialState,
    isGeoModalOpen: state.isGeoModalOpen,
  }))
  .handleAction(setGeoModalStatus, (state, action) => ({
    ...state,
    isGeoModalOpen: action.isGeoModalOpen,
  }));

export default geocoderReducer;
