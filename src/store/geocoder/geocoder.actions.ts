import { ActionType, createCustomAction } from 'typesafe-actions';
import { NewCityData } from './geocoder.types';

export const searchCity = createCustomAction(
  'Search city',
  (city: string) => ({ city }),
);

export const searchCityRequestSuccess = createCustomAction(
  'Search city request success',
  (cityData: NewCityData) => ({
    cityData,
  }),
);

export const searchCityRequestFailed = createCustomAction('Search city request failed');

export const clearSearchCityData = createCustomAction('Clear search city data');

export const setGeoModalStatus = createCustomAction(
  'Set geo modal status',
  (isGeoModalOpen: boolean) => ({
    isGeoModalOpen,
  }),
);

export type GeocoderActionsAll = ActionType<typeof searchCity
| typeof searchCityRequestSuccess
| typeof searchCityRequestFailed
| typeof clearSearchCityData
| typeof setGeoModalStatus
>;
