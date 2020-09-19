import { GeocoderReducerState } from './geocoder/geocoder.types';
import { CitiesReducerState } from './cities/cities.types';
import { AsyncStatusReducerState } from './async-status/async-status.types';

export interface ReduxState {
  geocoder: GeocoderReducerState
  cities: CitiesReducerState
  asyncStatus: AsyncStatusReducerState
}
