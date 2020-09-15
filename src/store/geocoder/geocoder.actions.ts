import { ActionType, createCustomAction } from 'typesafe-actions';
import { CityData } from '../store.types';

export const searchCity = createCustomAction(
  'Search city',
  (city: string) => ({ city }),
);

export const searchCityRequestSuccess = createCustomAction(
  'Search city request success',
  (cityData: CityData) => ({
    cityData,
  }),
);

export const searchCityRequestFail = createCustomAction(
  'Search city request failed',
  (error: string) => ({ error }),
);

export type GeocoderActionsAll = ActionType<typeof searchCity
| typeof searchCityRequestSuccess
| typeof searchCityRequestFail
>;
