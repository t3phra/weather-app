import { ActionType, createCustomAction } from 'typesafe-actions';
import { WeatherData } from '../store.types';

export const getWeather = createCustomAction(
  'Get weather',
  (latitude: number, longitude: number) => ({ latitude, longitude }),
);

export const getWeatherRequestSuccess = createCustomAction(
  'Get weather request success',
  (weatherData: WeatherData) => ({ weatherData }),
);

export const getWeatherRequestFail = createCustomAction(
  'Get weather request failed',
  (error: string) => ({ error }),
);

export type CityActionsAll = ActionType<typeof getWeather
| typeof getWeatherRequestSuccess
| typeof getWeatherRequestFail
>;
