import React, { PropsWithChildren } from 'react';
import { View, Text } from 'react-native';

type Props = {
  title: string;
} & PropsWithChildren;

const CardOptions = ({ children, title }: Props) => {
  return (
    <View
      className="p-6 items-center bg-gray-100 rounded-2xl"
      style={{ gap: 22 }}
    >
      <Text
        className="text-xl text-center"
        style={{ fontFamily: 'KumbhSans_400Regular' }}
      >
        {title}
      </Text>

      <View
        className="flex flex-row flex-wrap items-center justify-center"
        style={{ gap: 6 }}
      >
        {children}
      </View>
    </View>
  );
};

export default CardOptions;
