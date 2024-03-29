import { View, Text } from 'react-native'
import React from 'react'
import { StackScreenProps } from '@react-navigation/stack'
import { RootStackParamList } from '../..'
import CardOptions from '../../../../components/CardOptions'
import { LayoutWrapper } from '../../../../components/LayoutWrapper'
import { KeyValue } from '../../../../protocols/key-value.type'
import Button from '../../../../components/Button'

type Props = StackScreenProps<RootStackParamList, 'PlaceTypeStep'>

const options: KeyValue[] = [
  {
    key: 'night_club',
    value: 'Baladas',
  },
  { key: 'bar', value: 'Bares' },
  {
    key: 'restaurant',
    value: 'Restaurantes',
  },
  { key: 'cafe', value: 'Cafés' },
  { key: 'park', value: 'Parque' },
  { key: 'supermarket', value: 'Supermercados' },
]

export const PlaceTypeStep = ({ navigation }: Props) => {
  const optionsButtons = options.map((option) => (
    <Button
      variant='unselected'
      key={option.key}
      containerStyle={{ flexGrow: 1 }}
    >
      {option.value}
    </Button>
  ))

  return (
    <LayoutWrapper>
      <CardOptions title='Qual categoria de lugar você procura?'>
        {optionsButtons}
      </CardOptions>
    </LayoutWrapper>
  )
}
