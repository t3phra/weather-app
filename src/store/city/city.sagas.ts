import { takeLatest, put } from 'redux-saga/effects';
import axios from 'axios';

import { getWeather, getWeatherRequestSuccess, getWeatherRequestFail } from './city.actions';

function* getWeatherSaga(action: ReturnType<typeof getWeather>) {
  try {
    const response = yield axios.get(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${action.latitude}&lon=${action.longitude}&
exclude=hourly,daily&appid=d5bbf1bfba591ace18401e96f35eedeb`,
    );
    const weatherData = {
      temperature: response.data.current.temp - 273.15,
      weatherId: response.data.current.weather[0].id,
    };
    yield put(getWeatherRequestSuccess(weatherData));
  } catch (error) {
    yield put(getWeatherRequestFail(error.message));
  }
}

export default function* getWeatherSagaWatcher() {
  yield takeLatest(getWeather, getWeatherSaga);
}
