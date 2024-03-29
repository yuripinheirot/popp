import { View, Image, Text } from 'react-native'
import React from 'react'
import { useQuery } from '@tanstack/react-query'
import { googleController } from '../../../api/controllers/google.controller'
import { PlaceResultCardSkeleton } from './PlaceResultCardSkeleton'
import { GOOGLE_API_KEY } from '@env'

type Props = {
  name: string
  description: string
  imageReference: string
}
export const PlaceResultCard = ({
  description,
  imageReference,
  name,
}: Props) => {
  return (
    <View
      className='flex-row  bg-gray-200 p-2 rounded-lg'
      style={{ gap: 10, flexGrow: 1, flexShrink: 1 }}
    >
      <View className='w-[140px]'>
        <Image
          source={{
            uri: `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference=${imageReference}&key=${GOOGLE_API_KEY}`,
          }}
          style={{ width: '100%', height: 90, borderRadius: 4 }}
        />
      </View>
      <View
        className='flex-1'
        style={{ gap: 6 }}
      >
        <Text
          numberOfLines={1}
          ellipsizeMode='tail'
          className='text-lg font-bold '
        >
          {name}
        </Text>
        <Text
          numberOfLines={3}
          ellipsizeMode='tail'
        >
          {description}
        </Text>
      </View>
    </View>
  )
}
