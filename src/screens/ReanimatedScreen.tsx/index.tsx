/*
 * @Author: Pacific_D
 * @Date: 2022-10-22 17:12:32
 * @LastEditTime: 2022-10-24 22:48:09
 * @LastEditors: Pacific_D
 * @Description:
 * @FilePath: \learn-react-native\src\screens\ReanimatedScreen.tsx\index.tsx
 */
import { FC, useState } from 'react'
import {
  StyleSheet,
  View,
  SafeAreaView,
  FlatList,
  Text,
  Dimensions
} from 'react-native'
import { Swipeable, RectButton } from 'react-native-gesture-handler'
import Animated from 'react-native-reanimated'
import { Typewriter } from '@components'
import data from './data'
import ItemBox from './ItemBox'

const typedContent = ['Hello React Native!', 'In the pipe, five by five.']

const ReanimatedScreen: FC = () => {
  const [lists, setLists] = useState(data)
  const deleteItem = (index: number) => {
    const arr = [...lists]
    arr.splice(index, 1)
    setLists(arr)
  }

  return (
    <View style={styles.container}>
      <Typewriter content={typedContent} />
      <SafeAreaView style={styles.container}>
        <FlatList
          data={lists}
          renderItem={({ item, index }) => {
            return (
              <ItemBox data={item} handleDelete={() => deleteItem(index)} />
            )
          }}
          // ItemSeparatorComponent={() => {
          //   return <View style={styles.seperatorLine}></View>
          // }}
        />
      </SafeAreaView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#010100'
  },
  seperatorLine: {
    height: 1,
    backgroundColor: 'black'
  }
})

export default ReanimatedScreen
