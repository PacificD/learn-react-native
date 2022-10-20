/*
 * @Author: Pacific_D
 * @Date: 2022-10-18 20:30:23
 * @LastEditTime: 2022-10-19 15:49:43
 * @LastEditors: Pacific_D
 * @Description:
 * @FilePath: \learn-react-native\src\screens\LoginScreen\index.tsx
 */
import { DrawerScreenComponent } from '../../types'
import {
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  View,
  Text
} from 'react-native'
import Gaming from '../../assets/gaming.svg'
import { AntDesign } from '@expo/vector-icons'
import { useContext } from 'react'
import { AuthContext } from '../../context/AuthContext'
import MainScreen from './MainScreen'

const BACKGROUND_COLOR = '#FAFBFF'

const OnboardingScreen = ({ navigation }: DrawerScreenComponent) => {
  const { userToken } = useContext(AuthContext)
  if (userToken) return <MainScreen />

  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff'
      }}
    >
      <View style={{ marginTop: 20 }}>
        <Text
          style={{
            fontWeight: 'bold',
            fontSize: 30,
            color: '#20315f'
          }}
        >
          GAMEON
        </Text>
      </View>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Gaming
          width={300}
          height={300}
          style={{ transform: [{ rotate: '-15deg' }] }}
        />
      </View>
      <TouchableOpacity
        style={{
          backgroundColor: '#AD40AF',
          padding: 20,
          width: '90%',
          borderRadius: 10,
          marginBottom: 50,
          flexDirection: 'row',
          justifyContent: 'space-between'
        }}
        onPress={() => navigation.navigate('Login')}
      >
        <Text
          style={{
            color: 'white',
            fontSize: 18,
            textAlign: 'center',
            fontWeight: 'bold'
          }}
        >
          Let's Begin
        </Text>
        <AntDesign name="right" size={22} color="#fff" />
      </TouchableOpacity>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BACKGROUND_COLOR,
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default OnboardingScreen
