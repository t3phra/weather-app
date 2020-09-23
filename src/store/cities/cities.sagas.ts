import {
  all, put, select, takeLatest,
} from 'redux-saga/effects';
import axios from 'axios';

import {
  addNewCity, getWeather, getWeatherRequestFailed, getWeatherRequestSuccess,
} from './cities.actions';
import { setErrorMessage, setLoadingStatus } from '../async-status/async-status.actions';
import { selectCities } from './cities.selectors';
import { CityData, WeatherData, WeatherDataIncomingData } from './cities.types';

function* getWeatherSaga() {
  const cities = (yield select(selectCities)) as CityData[];
  yield put(setLoadingStatus(true));
  try {
    const responses = yield all(
      cities.map((city) => axios.get(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${city.location.latitude}&lon=${city.location.longitude}&
exclude=hourly,daily&appid=${process.env.REACT_APP_WEATHER_API_KEY}`,
      )),
    );
    const weatherData = responses.map((response: WeatherDataIncomingData, i: number) => ({
      cityId: cities[i].cityId,
      temperature: response.data.current.temp - 273.15,
      weatherId: response.data.current.weather[0].id,
    })) as WeatherData[];
    yield put(getWeatherRequestSuccess(weatherData));
  } catch (error) {
    yield put(getWeatherRequestFailed());
    yield put(setErrorMessage(error.message));
  }
  yield put(setLoadingStatus(false));
}

export default function* getWeatherSagaWatcher() {
  yield takeLatest([getWeather, addNewCity], getWeatherSaga);
}
