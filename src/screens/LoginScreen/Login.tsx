/*
 * @Author: Pacific_D
 * @Date: 2022-10-19 15:57:24
 * @LastEditTime: 2022-10-19 16:32:46
 * @LastEditors: Pacific_D
 * @Description:
 * @FilePath: \learn-react-native\src\screens\LoginScreen\Login.tsx
 */
import { DrawerScreenComponent } from '../../types'
import { SafeAreaView, View, Text, TouchableOpacity } from 'react-native'
import { MaterialIcons, Ionicons } from '@expo/vector-icons'
import LoginSVG from '../../assets/login1.svg'
import GoogleSVG from '../../assets/google.svg'
import FacebookSVG from '../../assets/facebook.svg'
import TwitterSVG from '../../assets/twitter.svg'
import { InputField, CustomButton } from '../../components'

const LoginScreen = ({ navigation }: DrawerScreenComponent) => {
  return (
    <SafeAreaView style={{ flex: 1, justifyContent: 'center' }}>
      <View style={{ paddingHorizontal: 25 }}>
        <View style={{ alignItems: 'center' }}>
          <LoginSVG
            height={300}
            width={300}
            style={{ transform: [{ rotate: '-5deg' }] }}
          />
        </View>

        <Text
          style={{
            fontSize: 28,
            fontWeight: '500',
            color: '#333',
            marginBottom: 30
          }}
        >
          Login
        </Text>

        <InputField
          label={'Email ID'}
          icon={
            <MaterialIcons
              name="alternate-email"
              size={20}
              color="#666"
              style={{ marginRight: 5 }}
            />
          }
          keyboardType="email-address"
        />

        <InputField
          label={'Password'}
          icon={
            <Ionicons
              name="ios-lock-closed-outline"
              size={20}
              color="#666"
              style={{ marginRight: 5 }}
            />
          }
          inputPassword={true}
          fieldButtonLabel={'Forgot?'}
          fieldButtonFunction={() => {}}
        />

        <CustomButton label={'Login'} onPress={() => {}} />

        <Text style={{ textAlign: 'center', color: '#666', marginBottom: 30 }}>
          Or, login with ...
        </Text>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginBottom: 30
          }}
        >
          <TouchableOpacity
            onPress={() => {}}
            style={{
              borderColor: '#ddd',
              borderWidth: 2,
              borderRadius: 10,
              paddingHorizontal: 30,
              paddingVertical: 10
            }}
          >
            <GoogleSVG height={24} width={24} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {}}
            style={{
              borderColor: '#ddd',
              borderWidth: 2,
              borderRadius: 10,
              paddingHorizontal: 30,
              paddingVertical: 10
            }}
          >
            <FacebookSVG height={24} width={24} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {}}
            style={{
              borderColor: '#ddd',
              borderWidth: 2,
              borderRadius: 10,
              paddingHorizontal: 30,
              paddingVertical: 10
            }}
          >
            <TwitterSVG height={24} width={24} />
          </TouchableOpacity>
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            marginBottom: 30
          }}
        >
          <Text>New to the app?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Register')}>
            <Text style={{ color: '#AD40AF', fontWeight: '700' }}>
              {' '}
              Register
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default LoginScreen
