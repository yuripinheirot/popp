import { View, Text } from 'react-native'
import React, { PropsWithChildren } from 'react'
import { Button as ButtonRneui, ButtonProps } from '@rneui/themed'

type Props = {
  variant?: 'unselected' | 'selected'
} & PropsWithChildren &
  ButtonProps

const Button = ({ children, variant, ...props }: Props) => {
  const variants: Record<string, ButtonProps> = {
    unselected: {
      buttonStyle: {
        backgroundColor: '#e4e4e4',
      },
      titleStyle: {
        color: '#333',
        fontFamily: 'KumbhSans_500Medium',
      },
    },
    selected: {
      color: 'secondary',
      titleStyle: {
        fontFamily: 'KumbhSans_500Medium',
      },
    },
  }

  return (
    <ButtonRneui
      {...props}
      {...(variants[variant!] || {})}
    >
      {children}
    </ButtonRneui>
  )
}

export default Button
