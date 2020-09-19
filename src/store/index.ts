import {
  createStore, combineReducers, compose, applyMiddleware,
} from 'redux';
import createSagaMiddleware from 'redux-saga';

import geocoderReducer from './geocoder/geocoder.reducer';
import citiesReducer from './cities/cities.reducer';
import asyncStatusReducer from './async-status/async-status.reducer';
import searchCitiesSagaWatcher from './geocoder/geocoder.sagas';
import getWeatherSagaWatcher from './cities/cities.sagas';

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose
  }
}

const composeEnhancers = (process.env.NODE_ENV === 'development'
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  : compose)!;

const mainReducer = combineReducers({
  geocoder: geocoderReducer,
  cities: citiesReducer,
  asyncStatus: asyncStatusReducer,
});

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  mainReducer,
  composeEnhancers(applyMiddleware(sagaMiddleware)),
);

sagaMiddleware.run(searchCitiesSagaWatcher);
sagaMiddleware.run(getWeatherSagaWatcher);

export default store;
