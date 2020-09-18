export interface WeatherDataIncomingData {
  data: {
    current: {
      temp: number,
      weather: {
        id: number
      }[],
    }
  }
}

export interface WeatherData {
  cityId?: number
  temperature: number
  weatherId: number
}

export interface CityData {
  location: {
    latitude: number
    longitude: number
  }
  city: string
  cityId: number
  country: string
  weather?: WeatherData
}

export interface CitiesReducerState {
  cities: {
    [cityId: number]: CityData
  }
}
