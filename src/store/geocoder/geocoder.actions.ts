import { ActionType, createCustomAction } from 'typesafe-actions';
import { GeocoderReducerState } from './geocoder.types';

export const searchCity = createCustomAction(
  'Search city',
  (city: string) => ({ city }),
);

export const searchCityRequestSuccess = createCustomAction(
  'Search city request success',
  (cityData: GeocoderReducerState) => ({
    cityData,
  }),
);

export const searchCityRequestFailed = createCustomAction('Search city request failed');

export type GeocoderActionsAll = ActionType<typeof searchCity
| typeof searchCityRequestSuccess
| typeof searchCityRequestFailed
>;
