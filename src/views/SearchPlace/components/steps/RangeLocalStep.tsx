import { View, Text } from 'react-native'
import React from 'react'
import { RootStackParamList } from '../..'
import { StackScreenProps } from '@react-navigation/stack'
import { Card } from '@rneui/themed'
import TitleHeader from '../TitleHeader'
import { KeyValue } from '../../../../protocols/key-value.type'
import Button from '../../../../components/Button'

type Props = StackScreenProps<RootStackParamList, 'RangeLocalStep'>

const options: KeyValue[] = [
  {
    value: '1km',
    key: 1000,
  },
  {
    value: '5km',
    key: 5000,
  },
  {
    value: '10km',
    key: 10000,
  },
  {
    value: '15km',
    key: 150000,
  },
  {
    value: '20km',
    key: 20000,
  },
  {
    value: '25km',
    key: 25000,
  },
]

export const RangeLocalStep = ({ navigation, route }: Props) => {
  const ButtonOptions = options.map((option) => (
    <Button
      variant='unselected'
      key={option.key}
      containerStyle={{ width: '30%' }}
    >
      {option.value}
    </Button>
  ))
  return (
    <View
      className='flex-1 items-center bg-white px-6'
      style={{ gap: 30 }}
    >
      <TitleHeader />
      <View
        className='p-6 items-center bg-gray-100 rounded-2xl'
        style={{ gap: 22 }}
      >
        <Text
          className='text-xl text-center'
          style={{ fontFamily: 'KumbhSans_400Regular' }}
        >
          Você pensa em ir à algum lugar à qual distância?
        </Text>

        <View
          className='flex flex-row flex-wrap items-center justify-center'
          style={{ gap: 6 }}
        >
          {ButtonOptions}
        </View>
      </View>
    </View>
  )
}
