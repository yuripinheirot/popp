import { View, Text, ScrollView } from 'react-native'
import React, { useEffect } from 'react'
import CardOptions from '../../../../components/CardOptions'
import { LayoutWrapper } from '../../../../components/LayoutWrapper'
import TitleHeader from '../TitleHeader'
import { StackScreenProps } from '@react-navigation/stack'
import { RootStackParamList } from '../..'
import { initialLocation } from '../../../../constants/initialLocation'
import { useQuery } from '@tanstack/react-query'
import { mapsController } from '../../../../api/controllers/maps.controller'
import PlaceResultCard from '../PlaceResultCard'

type Props = StackScreenProps<RootStackParamList, 'ResultsStep'>

export const ResultsStep = ({ route }: Props) => {
  const { isLoading, data } = useQuery({
    queryKey: ['nearbySearch', route.params],
    queryFn: () =>
      mapsController.searchNearbyPlaces({
        keyword: route.params.keyword,
        radius: route.params.range,
        type: route.params.type,
        lat: initialLocation.lat,
        lng: initialLocation.lng,
      }),
  })

  const renderResults = data?.results?.map((result) => (
    <PlaceResultCard
      name={result.name as string}
      description={result.vicinity as string}
      imageReference={result.photos?.[0].photo_reference as string}
      key={result.place_id as string}
    />
  ))

  return (
    <ScrollView>
      <View>
        <View
          className='p-4 bg-white'
          style={{ gap: 20 }}
        >
          {renderResults}
        </View>
      </View>
    </ScrollView>
  )
}
