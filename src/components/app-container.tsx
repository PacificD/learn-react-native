/*
 * @Author: Pacific_D
 * @Date: 2022-08-29 13:56:12
 * @LastEditTime: 2022-08-29 20:40:35
 * @LastEditors: Pacific_D
 * @Description:
 * @FilePath: \expo-ts-boilerplate\src\components\app-container.tsx
 */
import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { NativeBaseProvider } from 'native-base'
import theme from '../theme'

type Props = {
  children: React.ReactNode
}

export default function AppContainer(props: Props) {
  return (
    <NavigationContainer>
      <NativeBaseProvider theme={theme}>{props.children}</NativeBaseProvider>
    </NavigationContainer>
  )
}
