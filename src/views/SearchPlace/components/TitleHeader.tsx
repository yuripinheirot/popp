import { View, Text } from 'react-native'
import React from 'react'

const TitleHeader = () => {
  return (
    <View
      className='items-center'
      style={{ gap: 3 }}
    >
      <Text
        className='text-3xl'
        style={{ fontFamily: 'KumbhSans_800ExtraBold' }}
      >
        O que você busca?
      </Text>
      <Text
        className='text-lg'
        style={{ fontFamily: 'KumbhSans_500Medium' }}
      >
        Selecione 1 opção
      </Text>
    </View>
  )
}

export default TitleHeader
