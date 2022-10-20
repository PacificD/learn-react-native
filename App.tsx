/*
 * @Author: Pacific_D
 * @Date: 2022-08-28 18:53:45
 * @LastEditTime: 2022-10-19 16:37:10
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
  SwipeToDeleteScreen,
  OnboardingScreen,
  LoginScreen,
  RegisterScreen
} from './src/screens'

const Drawer = createDrawerNavigator()

export default function App() {
  return (
    <AppContainer>
      <Drawer.Navigator initialRouteName="Loginboarding">
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="DragAndSort" component={DragAndSortScreen} />
        <Drawer.Screen name="SwipeToDelete" component={SwipeToDeleteScreen} />
        <Drawer.Screen name="Loginboarding" component={OnboardingScreen} />
        <Drawer.Screen
          name="Login"
          component={LoginScreen}
          options={{
            drawerItemStyle: {
              display: 'none'
            }
          }}
        />
        <Drawer.Screen
          name="Register"
          component={RegisterScreen}
          options={{
            drawerItemStyle: {
              display: 'none'
            }
          }}
        />
      </Drawer.Navigator>
    </AppContainer>
  )
}
