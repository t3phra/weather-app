export interface GeocoderReducerState {
  city: string
  cityId: number
  country: string
  location: {
    latitude: number
    longitude: number
  }
  isGeoModalOpen: boolean
}

export interface NewCityData {
  city: string
  cityId: number
  country: string
  location: {
    latitude: number
    longitude: number
  }
}
