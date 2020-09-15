import { takeLatest, put, delay } from 'redux-saga/effects';
import axios from 'axios';

import { searchCity, searchCityRequestFail, searchCityRequestSuccess } from './geocoder.actions';

function* searchCitiesSaga(action: ReturnType<typeof searchCity>) {
  yield delay(300);
  try {
    const response = yield axios.get(
      `/get_geocoder_data?address=${action.city}`,
    );
    const cityData = {
      city: response.data.address_data.city,
      country: response.data.address_data.country,
      latitude: response.data.lat,
      longitude: response.data.lng,
    };
    yield put(searchCityRequestSuccess(cityData));
  } catch (error) {
    yield put(searchCityRequestFail(error.message));
  }
}

export default function* searchCitiesSagaWatcher() {
  yield takeLatest(searchCity, searchCitiesSaga);
}
