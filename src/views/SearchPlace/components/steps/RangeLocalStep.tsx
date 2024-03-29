import { StackScreenProps } from '@react-navigation/stack';
import React from 'react';

import { RootStackParamList } from '../..';
import Button from '../../../../components/Button';
import CardOptions from '../../../../components/CardOptions';
import { LayoutWrapper } from '../../../../components/LayoutWrapper';
import { KeyValue } from '../../../../protocols/key-value.type';
import TitleHeader from '../TitleHeader';

type Props = StackScreenProps<RootStackParamList, 'RangeLocalStep'>;

const options: KeyValue[] = [
  {
    value: '1km',
    key: 1000
  },
  {
    value: '5km',
    key: 5000
  },
  {
    value: '10km',
    key: 10000
  },
  {
    value: '15km',
    key: 150000
  },
  {
    value: '20km',
    key: 20000
  },
  {
    value: '25km',
    key: 25000
  }
];

export const RangeLocalStep = ({ navigation }: Props) => {
  const onSelectRange = (range: number) => {
    navigation.push('PlaceTypeStep', { range });
  };

  const ButtonOptions = options.map((option) => (
    <Button
      variant="unselected"
      key={option.key}
      containerStyle={{ width: '30%' }}
      onPress={() => onSelectRange(option.key as number)}
    >
      {option.value}
    </Button>
  ));
  return (
    <LayoutWrapper>
      <TitleHeader />
      <CardOptions title="Você pensa em ir à algum lugar à qual distância?">
        {ButtonOptions}
      </CardOptions>
    </LayoutWrapper>
  );
};
