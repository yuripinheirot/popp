import { View, Text } from 'react-native'
import React from 'react'
import { RootStackParamList } from '../..'
import { StackScreenProps } from '@react-navigation/stack'
import { Button } from '@rneui/themed'

type Props = StackScreenProps<RootStackParamList, 'RangeLocalStep'>

export const RangeLocalStep = ({ navigation, route }: Props) => {
  return (
    <View className=''>
      <Text>RangeLocalStep</Text>
      <Button onPress={() => navigation.push('PlaceTypeStep', { type: '' })}>
        Go
      </Button>
    </View>
  )
}
