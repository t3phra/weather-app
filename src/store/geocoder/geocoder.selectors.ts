import { ReduxState } from '../store.types';

export const selectCity = (state: ReduxState) => state.geocoder.city;

export const selectCountry = (state: ReduxState) => state.geocoder.country;

export const selectLatitude = (state: ReduxState) => state.geocoder.latitude;

export const selectLongitude = (state: ReduxState) => state.geocoder.longitude;

export const selectLocation = (state: ReduxState) => ({
  city: state.geocoder.city,
  country: state.geocoder.country,
  latitude: state.geocoder.latitude,
  longitude: state.geocoder.longitude,
});
