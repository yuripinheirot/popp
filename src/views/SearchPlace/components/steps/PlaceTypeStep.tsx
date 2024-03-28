import { View, Text } from 'react-native'
import React from 'react'
import { StackScreenProps } from '@react-navigation/stack'
import { RootStackParamList } from '../..'
import { Button } from '@rneui/themed'

type Props = StackScreenProps<RootStackParamList, 'PlaceTypeStep'>

export const PlaceTypeStep = ({ navigation }: Props) => {
  return (
    <View>
      <Text>PlaceTypeStep</Text>
      <Button onPress={() => navigation.push('SpecialityPlaceStep')}>Go</Button>
    </View>
  )
}
