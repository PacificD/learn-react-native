/*
 * @Author: Pacific_D
 * @Date: 2022-08-29 21:29:19
 * @LastEditTime: 2022-08-29 21:29:20
 * @LastEditors: Pacific_D
 * @Description:
 * @FilePath: \learn-react-native\src\screens\DragAndSortScreen.tsx
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
