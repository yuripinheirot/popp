import { StyleSheet, View } from 'react-native'
import React from 'react'
import { Skeleton } from '@rneui/themed'

const skeletonStyle = StyleSheet.create({
  body: {
    borderRadius: 4,
    backgroundColor: '#cccccccc',
  },
  pulse: {
    borderRadius: 4,
    backgroundColor: '#e2e2e2',
  },
})

export const PlaceResultCardSkeleton = () => {
  return (
    <View
      className='flex-row  bg-gray-200 p-2 rounded-lg'
      style={{ gap: 10, flexGrow: 1, flexShrink: 1 }}
    >
      <View className='w-[140px]'>
        <Skeleton
          animation='wave'
          height={80}
          style={skeletonStyle.body}
          skeletonStyle={skeletonStyle.pulse}
        />
      </View>
      <View
        className='flex-1'
        style={{ gap: 6 }}
      >
        <Skeleton
          animation='wave'
          height={30}
          style={skeletonStyle.body}
          skeletonStyle={skeletonStyle.pulse}
        />

        <View style={{ gap: 3 }}>
          <Skeleton
            animation='wave'
            style={skeletonStyle.body}
            skeletonStyle={skeletonStyle.pulse}
          />
          <Skeleton
            animation='wave'
            style={skeletonStyle.body}
            skeletonStyle={skeletonStyle.pulse}
          />
          <Skeleton
            animation='wave'
            style={skeletonStyle.body}
            skeletonStyle={skeletonStyle.pulse}
          />
        </View>
      </View>
    </View>
  )
}
