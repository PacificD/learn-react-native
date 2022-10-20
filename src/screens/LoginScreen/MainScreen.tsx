/*
 * @Author: Pacific_D
 * @Date: 2022-10-19 15:47:06
 * @LastEditTime: 2022-10-19 15:49:58
 * @LastEditors: Pacific_D
 * @Description:
 * @FilePath: \learn-react-native\src\screens\LoginScreen\MainScreen.tsx
 */
import { SafeAreaView, Text } from 'react-native'

const MainScreen = () => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff'
      }}
    >
      <Text
        style={{
          fontWeight: 'bold',
          fontSize: 30,
          color: '#20315f'
        }}
      >
        Main Screen
      </Text>
    </SafeAreaView>
  )
}

export default MainScreen
