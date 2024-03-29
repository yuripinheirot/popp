import { View, Text } from 'react-native'
import React from 'react'
import { StackScreenProps } from '@react-navigation/stack'
import { RootStackParamList } from '../..'
import CardOptions from '../../../../components/CardOptions'
import { LayoutWrapper } from '../../../../components/LayoutWrapper'
import { KeyValue } from '../../../../protocols/key-value.type'
import Button from '../../../../components/Button'
import { Image } from '@rneui/themed'
import Vinil from '../../../../../assets/vinyl.svg'
import TicketMusic from '../../../../../assets/ticket-music.svg'
import Prato from '../../../../../assets/prato.svg'
import Cofee from '../../../../../assets/coffee.svg'
import Parque from '../../../../../assets/parque-infantil.svg'
import Supermarket from '../../../../../assets/supermarket.svg'

type Props = StackScreenProps<RootStackParamList, 'PlaceTypeStep'>

const options: Array<KeyValue & { SvgIcon: any }> = [
  {
    key: 'night_club',
    value: 'Baladas',
    SvgIcon: Vinil,
  },
  { key: 'bar', value: 'Bares', SvgIcon: TicketMusic },
  {
    key: 'restaurant',
    value: 'Restaurantes',
    SvgIcon: Prato,
  },
  { key: 'cafe', value: 'Cafés', SvgIcon: Cofee },
  { key: 'park', value: 'Parque', SvgIcon: Parque },
  { key: 'supermarket', value: 'Supermercados', SvgIcon: Supermarket },
]

export const PlaceTypeStep = ({ navigation }: Props) => {
  const optionsButtons = options.map(({ SvgIcon, key, value }) => (
    <Button
      variant='unselected'
      key={key}
      containerStyle={{ flexGrow: 1 }}
    >
      <View className='justify-center items-center gap-2'>
        <SvgIcon
          width={40}
          height={40}
          key={key}
        />
        <Text className='font-semibold'>{value}</Text>
      </View>
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
