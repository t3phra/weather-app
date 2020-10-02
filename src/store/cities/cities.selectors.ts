import { ReduxState } from '../store.types';

export const selectCityData = (state: ReduxState) => state.cities.cities;

export const selectCities = (state: ReduxState) => Object.values(state.cities.cities);
