/*
 * @Author: Pacific_D
 * @Date: 2022-08-28 18:53:45
 * @LastEditTime: 2022-10-22 15:05:48
 * @LastEditors: Pacific_D
 * @Description:
 * @FilePath: \learn-react-native\App.tsx
 */
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { AppContainer } from '@components'
import {
  HomeScreen,
  DragAndSortScreen,
  SwipeToDeleteScreen,
  OnboardingScreen,
  LoginScreen,
  RegisterScreen,
  TwitterProfileScreen
} from '@screens'

const Drawer = createDrawerNavigator()

export default function App() {
  return (
    <AppContainer>
      <Drawer.Navigator initialRouteName="HomeScreen">
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="DragAndSort" component={DragAndSortScreen} />
        <Drawer.Screen name="SwipeToDelete" component={SwipeToDeleteScreen} />
        <Drawer.Screen name="TwitterProfile" component={TwitterProfileScreen} />
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
