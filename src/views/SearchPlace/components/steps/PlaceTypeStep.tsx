import { View, Text } from 'react-native'
import React from 'react'
import { StackScreenProps } from '@react-navigation/stack'
import { RootStackParamList } from '../..'
import CardOptions from '../../../../components/CardOptions'
import { LayoutWrapper } from '../../../../components/LayoutWrapper'
import { KeyValue } from '../../../../protocols/key-value.type'
import Button from '../../../../components/Button'
import Vinil from '../../../../../assets/vinyl.svg'
import TicketMusic from '../../../../../assets/ticket-music.svg'
import Prato from '../../../../../assets/prato.svg'
import Cofee from '../../../../../assets/coffee.svg'
import Parque from '../../../../../assets/parque-infantil.svg'
import Supermarket from '../../../../../assets/supermarket.svg'

type Props = StackScreenProps<RootStackParamList, 'PlaceTypeStep'>

const options: Array<KeyValue & { SvgIcon: any; specialities?: KeyValue[] }> = [
  {
    key: 'night_club',
    value: 'Baladas',
    SvgIcon: Vinil,
    specialities: [
      { key: 'Pop', value: 'Pop' },
      { key: 'Eletrônica', value: 'Eletrônica' },
      { key: 'Rap / Hip-Hop', value: 'Rap / Hip-Hop' },
      { key: 'Reggae', value: 'Reggae' },
      { key: 'Samba', value: 'Samba' },
      { key: 'Funk / Reggaeton', value: 'Funk / Reggaeton' },
      { key: 'Pagode', value: 'Pagode' },
      { key: 'Sertanejo', value: 'Sertanejo' },
    ],
  },
  { key: 'bar', value: 'Bares', SvgIcon: TicketMusic },
  {
    key: 'restaurant',
    value: 'Restaurantes',
    SvgIcon: Prato,
    specialities: [
      { key: 'japonese', value: 'Japonês' },
      { key: 'árabe', value: 'Árabe' },
      { key: 'brasileira', value: 'Brasileira' },
      { key: 'americana', value: 'Americana' },
      { key: 'alemã', value: 'Alemã' },
      { key: 'Mexicana', value: 'Mexicana' },
      { key: 'Tailandesa', value: 'Tailandesa' },
      { key: 'Italiana', value: 'Italiana' },
    ],
  },
  { key: 'cafe', value: 'Cafés', SvgIcon: Cofee },
  { key: 'park', value: 'Parque', SvgIcon: Parque },
  { key: 'supermarket', value: 'Supermercados', SvgIcon: Supermarket },
]

export const PlaceTypeStep = ({ navigation, route }: Props) => {
  const onSelectType = (type: string) => {
    const hasSpecialities = options.find(
      (option) => option.key === type
    )?.specialities

    if (hasSpecialities) {
      return navigation.push('SpecialityPlaceStep', {
        range: route.params!.range,
        type,
        specialities: hasSpecialities,
      })
    }

    navigation.push('ResultsStep', { range: route.params!.range, type })
  }

  const optionsButtons = options.map(({ SvgIcon, key, value }) => (
    <Button
      variant='unselected'
      key={key}
      containerStyle={{ flexGrow: 1 }}
      onPress={() => onSelectType(key as string)}
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
