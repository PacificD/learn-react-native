/*
 * @Author: Pacific_D
 * @Date: 2022-08-28 18:53:45
 * @LastEditTime: 2022-08-30 15:39:53
 * @LastEditors: Pacific_D
 * @Description:
 * @FilePath: \learn-react-native\App.tsx
 */
import React from 'react'
import { AppContainer } from './src/components'
import { createDrawerNavigator } from '@react-navigation/drawer'
import {
  HomeScreen,
  DragAndSortScreen,
  SwipeToDeleteScreen
} from './src/screens'

const Drawer = createDrawerNavigator()

export default function App() {
  return (
    <AppContainer>
      <Drawer.Navigator initialRouteName="DragAndSort">
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="DragAndSort" component={DragAndSortScreen} />
        <Drawer.Screen name="SwipeToDelete" component={SwipeToDeleteScreen} />
      </Drawer.Navigator>
    </AppContainer>
  )
}
