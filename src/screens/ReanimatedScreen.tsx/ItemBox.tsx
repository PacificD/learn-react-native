/*
 * @Author: Pacific_D
 * @Date: 2022-10-24 22:42:02
 * @LastEditTime: 2022-10-24 22:49:12
 * @LastEditors: Pacific_D
 * @Description:
 * @FilePath: \learn-react-native\src\screens\ReanimatedScreen.tsx\ItemBox.tsx
 */
import { FC } from 'react'
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Animated,
  TouchableOpacity
} from 'react-native'
import Swipeable from 'react-native-gesture-handler/Swipeable'

const SCREEN_WIDTH = Dimensions.get('window').width

interface IProps {
  handleDelete: any
  data: any
}

const ItemBox: FC<IProps> = props => {
  const leftSwipe = (progress: any, dragX: any) => {
    const scale = dragX.interpolate({
      inputRange: [0, 100],
      outputRange: [0, 1],
      extrapolate: 'clamp'
    })
    return (
      <TouchableOpacity onPress={props.handleDelete} activeOpacity={0.6}>
        <View style={styles.deleteBox}>
          <Animated.Text style={{ transform: [{ scale: scale }] }}>
            Delete
          </Animated.Text>
        </View>
      </TouchableOpacity>
    )
  }
  return (
    <Swipeable renderLeftActions={leftSwipe} overshootLeft={false}>
      <View style={styles.container}>
        <Text>My name is {props.data.name}.</Text>
      </View>
    </Swipeable>
  )
}

const styles = StyleSheet.create({
  container: {
    height: 80,
    width: SCREEN_WIDTH,
    backgroundColor: 'white',
    justifyContent: 'center',
    padding: 16
  },
  deleteBox: {
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
    height: 80
  }
})

export default ItemBox
