import { ActionType, createCustomAction } from 'typesafe-actions';
import { CitiesState, CityData, WeatherData } from './cities.types';

export const hydrateCities = createCustomAction(
  'Hydrate cities',
);

export const hydrateCitiesSuccess = createCustomAction(
  'Hydrate cities success',
  (cities: CitiesState) => ({ cities }),
);

export const addNewCity = createCustomAction(
  'Add new city',
  (city: CityData) => ({ city }),
);

export const removeCity = createCustomAction(
  'Remove city',
  (cityId: number) => ({ cityId }),
);

export const getWeather = createCustomAction(
  'Get weather',
);

export const getWeatherRequestSuccess = createCustomAction(
  'Get weather request success',
  (weatherData: WeatherData[]) => ({ weatherData }),
);

export const getWeatherRequestFailed = createCustomAction('Get weather request failed');

export type CitiesActionsAll = ActionType<typeof hydrateCities
| typeof hydrateCitiesSuccess
| typeof addNewCity
| typeof removeCity
| typeof getWeather
| typeof getWeatherRequestSuccess
| typeof getWeatherRequestFailed
>;
