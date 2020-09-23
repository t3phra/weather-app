import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { v4 as uuidv4 } from 'uuid';

import {
  clearSearchCityData,
  searchCity,
  searchCityRequestFailed,
  searchCityRequestSuccess,
  setGeoModalStatus,
} from './geocoder.actions';
import { setErrorMessage, setLoadingStatus } from '../async-status/async-status.actions';

function* searchCitiesSaga(action: ReturnType<typeof searchCity>) {
  yield put(clearSearchCityData());
  yield put(setLoadingStatus(true));
  yield put(setGeoModalStatus(true));
  try {
    const response = yield axios.get(
      `/get_geocoder_data?address=${action.city}`,
    );
    const cityData = {
      city: response.data.address_data.city,
      cityId: uuidv4(),
      country: response.data.address_data.country,
      location: {
        latitude: response.data.lat,
        longitude: response.data.lng,
      },
    };
    yield put(searchCityRequestSuccess(cityData));
  } catch (error) {
    yield put(searchCityRequestFailed());
    yield put(setErrorMessage(error.message));
  }
  yield put(setLoadingStatus(false));
}

export default function* searchCitiesSagaWatcher() {
  yield takeLatest(searchCity, searchCitiesSaga);
}
