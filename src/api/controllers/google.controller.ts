import { http } from '../http'
import { PlacesNearbyResponse } from '@googlemaps/google-maps-services-js'
import { SearchNearbyPlacesQueryType } from '../protocols/searchNearbyPlacesQuery.type'
import { httpGoogle } from '../google.api'

export const googleController = {
  getPhotoByReferente: async (reference: string) => {
    const { data } = await httpGoogle.get('/place/photo', {
      params: {
        key: 'AIzaSyBefyTTZjo6Rmfqul_rGi1QLbtyQmykiNY',
        photo_reference: reference,
        maxwidth: 400,
      },
    })

    return data
  },
}
