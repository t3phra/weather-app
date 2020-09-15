import { ReduxState } from '../store.types';

export const selectTemperature = (state: ReduxState) => Math.round(state.city.temperature);

export const selectWeatherId = (state: ReduxState) => state.city.weatherId;
