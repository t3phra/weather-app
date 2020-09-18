import { GeocoderReducerState } from './geocoder/geocoder.types';
import { CitiesReducerState } from './cities/cities.types';

export interface ReduxState {
  geocoder: GeocoderReducerState
  cities: CitiesReducerState
}
