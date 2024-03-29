import { View, Text } from 'react-native'
import React from 'react'
import CardOptions from '../../../../components/CardOptions'
import { LayoutWrapper } from '../../../../components/LayoutWrapper'
import TitleHeader from '../TitleHeader'
import { StackScreenProps } from '@react-navigation/stack'
import { RootStackParamList } from '../..'

type Props = StackScreenProps<RootStackParamList, 'ResultsStep'>

export const ResultsStep = ({ route }: Props) => {
  return (
    <LayoutWrapper>
      <TitleHeader />
      <CardOptions title='ResultsStep'>
        <Text>{JSON.stringify(route.params, null, '\n')}</Text>
      </CardOptions>
    </LayoutWrapper>
  )
}
