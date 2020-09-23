import { ReduxState } from '../store.types';

export const selectLocation = (state: ReduxState) => ({
  city: state.geocoder.city,
  cityId: state.geocoder.cityId,
  country: state.geocoder.country,
  location: {
    latitude: state.geocoder.location.latitude,
    longitude: state.geocoder.location.longitude,
  },
});

export const selectIsGeoModalOpen = (state: ReduxState) => state.geocoder.isGeoModalOpen;
