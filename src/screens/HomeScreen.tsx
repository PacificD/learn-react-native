/*
 * @Author: Pacific_D
 * @Date: 2022-08-29 21:24:24
 * @LastEditTime: 2022-08-29 21:24:25
 * @LastEditors: Pacific_D
 * @Description:
 * @FilePath: \learn-react-native\src\screens\HomeScreen.tsx
 */
import { Button, View } from 'react-native'
import { DrawerScreenComponent } from '../types'

const HomeScreen = ({ navigation }: DrawerScreenComponent) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        onPress={() => navigation.navigate('Notifications')}
        title="Go to notifications"
      />
    </View>
  )
}

export default HomeScreen
