import { View } from 'react-native'
import React from 'react'
import { SearchPlaceView } from './views/SearchPlace'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

export const Main = () => {
  const insets = useSafeAreaInsets()

  return (
    <View
      className='flex-1'
      style={{
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
        paddingLeft: insets.left,
        paddingRight: insets.right,
      }}
    >
      <SearchPlaceView />
    </View>
  )
}
