import { View, Text } from 'react-native'
import React from 'react'

const TitleHeader = () => {
  return (
    <View
      className='items-center'
      style={{ gap: 3 }}
    >
      <Text className='text-3xl font-bold'>O que você busca?</Text>
      <Text className='text-lg'>Selecione 1 opção</Text>
    </View>
  )
}

export default TitleHeader
