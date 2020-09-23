import { ReduxState } from '../store.types';

export const selectLocation = (state: ReduxState) => ({
  city: state.geocoder.city,
  cityId: state.geocoder.cityId,
  country: state.geocoder.country,
  latitude: state.geocoder.latitude,
  longitude: state.geocoder.longitude,
});

export const selectIsGeoModalOpen = (state: ReduxState) => state.geocoder.isGeoModalOpen;
