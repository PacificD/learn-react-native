/*
 * @Author: Pacific_D
 * @Date: 2022-10-22 17:12:32
 * @LastEditTime: 2022-10-22 18:38:13
 * @LastEditors: Pacific_D
 * @Description:
 * @FilePath: \learn-react-native\src\screens\ReanimatedScreen.tsx\index.tsx
 */
import { FC } from 'react'
import { StyleSheet, View } from 'react-native'
import { Typewriter } from '@components'

const typedContent = ['Hello React Native!', 'In the pipe, five by five.']

const ReanimatedScreen: FC = () => {
  return (
    <View style={styles.container}>
      <Typewriter content={typedContent} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#010100'
  }
})

export default ReanimatedScreen
