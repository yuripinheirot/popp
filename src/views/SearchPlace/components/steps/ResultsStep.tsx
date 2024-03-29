import { View, Text } from 'react-native'
import React from 'react'
import CardOptions from '../../../../components/CardOptions'
import { LayoutWrapper } from '../../../../components/LayoutWrapper'
import TitleHeader from '../TitleHeader'
import { StackScreenProps } from '@react-navigation/stack'
import { RootStackParamList } from '../..'
import { initialLocation } from '../../../../constants/initialLocation'
import { useQuery } from '@tanstack/react-query'
import { mapsController } from '../../../../api/controllers/maps.controller'

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

  if (isLoading) {
    return <Text>Loading...</Text>
  }

  return (
    <LayoutWrapper>
      <TitleHeader />
      <CardOptions title='ResultsStep'>
        <Text>
          {JSON.stringify({ params: route.params, data }, null, '\n')}
        </Text>
      </CardOptions>
    </LayoutWrapper>
  )
}
