import {
  createStore, combineReducers, compose, applyMiddleware,
} from 'redux';
import createSagaMiddleware from 'redux-saga';

import geocoderReducer from './geocoder/geocoder.reducer';
import cityReducer from './city/city.reducer';
import searchCitiesSagaWatcher from './geocoder/geocoder.sagas';
import getWeatherSagaWatcher from './city/city.sagas';

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
  city: cityReducer,
});

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  mainReducer,
  composeEnhancers(applyMiddleware(sagaMiddleware)),
);

sagaMiddleware.run(searchCitiesSagaWatcher);
sagaMiddleware.run(getWeatherSagaWatcher);

export default store;
