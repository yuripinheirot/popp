import { View, Text } from 'react-native'
import React, { PropsWithChildren } from 'react'

export const LayoutWrapper = ({ children }: PropsWithChildren) => {
  return (
    <View
      className='flex-1 items-center bg-white px-6'
      style={{ gap: 30 }}
    >
      {children}
    </View>
  )
}
