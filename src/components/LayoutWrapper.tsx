import React, { PropsWithChildren } from 'react';
import { View } from 'react-native';

export const LayoutWrapper = ({ children }: PropsWithChildren) => {
  return (
    <View
      className="flex-1 items-center bg-white px-6 py-20"
      style={{ gap: 30 }}
    >
      {children}
    </View>
  );
};
