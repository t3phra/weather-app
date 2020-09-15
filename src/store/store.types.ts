export interface ReduxState {
  geocoder: GeocoderReducerState
  city: CityReducerState
}

export interface GeocoderReducerState {
  city: string
  country: string
  latitude: number
  longitude: number
  isLoading: boolean
  error: string
}

export interface CityData {
  city: string
  country: string
  latitude: number
  longitude: number
}

export interface CityReducerState {
  temperature: number
  weatherId: number
  isLoading: boolean
  error: string
}

export interface WeatherData {
  temperature: number
  weatherId: number
}
