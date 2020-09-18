import { ReduxState } from '../store.types';

export const selectCities = (state: ReduxState) => Object.values(state.cities.cities);
