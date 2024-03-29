import { PlacesNearbyResponse } from '@googlemaps/google-maps-services-js';

import { http } from '../http';
import { SearchNearbyPlacesQueryType } from '../protocols/searchNearbyPlacesQuery.type';

export const mapsController = {
  searchNearbyPlaces: async (query: SearchNearbyPlacesQueryType) => {
    const { data } = await http.get<PlacesNearbyResponse['data']>(
      '/maps/search/nearby',
      { params: query }
    );

    return data;
  }
};
