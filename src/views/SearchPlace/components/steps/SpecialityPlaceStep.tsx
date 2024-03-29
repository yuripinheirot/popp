import { View, Text } from 'react-native'
import React from 'react'
import CardOptions from '../../../../components/CardOptions'
import { LayoutWrapper } from '../../../../components/LayoutWrapper'
import TitleHeader from '../TitleHeader'
import { StackScreenProps } from '@react-navigation/stack'
import { RootStackParamList } from '../..'

type Props = StackScreenProps<RootStackParamList, 'SpecialityPlaceStep'>

export const SpecialityPlaceStep = ({}: Props) => {
  return (
    <LayoutWrapper>
      <TitleHeader />
      <CardOptions title='Qual é a especialidade do lugar?'></CardOptions>
    </LayoutWrapper>
  )
}
