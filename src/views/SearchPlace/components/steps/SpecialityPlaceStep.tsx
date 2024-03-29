import { StackScreenProps } from '@react-navigation/stack';
import React from 'react';

import { RootStackParamList } from '../..';
import Button from '../../../../components/Button';
import CardOptions from '../../../../components/CardOptions';
import { LayoutWrapper } from '../../../../components/LayoutWrapper';
import TitleHeader from '../TitleHeader';

type Props = StackScreenProps<RootStackParamList, 'SpecialityPlaceStep'>;

export const SpecialityPlaceStep = ({ route, navigation }: Props) => {
  const onSelectSpeciality = (speciality: string) => {
    navigation.push('ResultsStep', {
      keyword: speciality,
      range: route.params?.range as number,
      type: route.params?.type as string
    });
  };

  const optionsButtons = route.params?.specialities.map(({ key, value }) => (
    <Button
      variant="unselected"
      key={key}
      containerStyle={{ flexGrow: 1 }}
      onPress={() => onSelectSpeciality(key as string)}
    >
      {value}
    </Button>
  ));

  return (
    <LayoutWrapper>
      <TitleHeader />
      <CardOptions title="Qual é a especialidade do lugar?">
        {optionsButtons}
      </CardOptions>
    </LayoutWrapper>
  );
};
