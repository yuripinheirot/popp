import { StackScreenProps } from '@react-navigation/stack';
import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { View, ScrollView } from 'react-native';

import { RootStackParamList } from '../..';
import { mapsController } from '../../../../api/controllers/maps.controller';
import { initialLocation } from '../../../../constants/initialLocation';
import { PlaceResultCard } from '../PlaceResultCard';
import { PlaceResultCardSkeleton } from '../PlaceResultCardSkeleton';

type Props = StackScreenProps<RootStackParamList, 'ResultsStep'>;

export const ResultsStep = ({ route }: Props) => {
  const { isLoading, data } = useQuery({
    queryKey: ['nearbySearch', route.params],
    queryFn: () =>
      mapsController.searchNearbyPlaces({
        keyword: route.params.keyword,
        radius: route.params.range,
        type: route.params.type,
        lat: initialLocation.lat,
        lng: initialLocation.lng
      })
  });

  const renderResults = data?.results?.map((result) => (
    <PlaceResultCard
      name={result.name as string}
      description={result.vicinity as string}
      imageReference={result.photos?.[0].photo_reference as string}
      key={result.place_id as string}
    />
  ));

  const renderSkeletons = Array.from({ length: 7 }).map((_, index) => (
    // eslint-disable-next-line react/no-array-index-key
    <PlaceResultCardSkeleton key={index} />
  ));

  return (
    <ScrollView>
      <View className="flex-1">
        <View className="p-4 bg-white" style={{ gap: 20 }}>
          {isLoading ? renderSkeletons : renderResults}
        </View>
      </View>
    </ScrollView>
  );
};
