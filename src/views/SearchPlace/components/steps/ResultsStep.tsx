import { StackScreenProps } from '@react-navigation/stack';
import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { View, ScrollView, Text } from 'react-native';

import { RootStackParamList } from '../..';
import IconNotFound from '../../../../../assets/Poppy-No-Results-Found.svg';
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

  const render = () => {
    if (isLoading) {
      return renderSkeletons;
    }

    if (!isLoading && !data?.results?.length) {
      return (
        <View className="flex-1 items-center justify-center bg-white">
          <IconNotFound width={200} height={200} />
          <Text style={{ fontFamily: 'KumbhSans_400Regular' }}>
            Ops! Nenhum resultado encontrado :(
          </Text>
        </View>
      );
    }

    return renderResults;
  };

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }} className="bg-white">
      <View className="flex-1 p-4 " style={{ gap: 20 }}>
        {render()}
      </View>
    </ScrollView>
  );
};
