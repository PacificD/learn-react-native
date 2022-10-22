/*
 * @Author: Pacific_D
 * @Date: 2022-10-22 17:06:54
 * @LastEditTime: 2022-10-22 20:32:15
 * @LastEditors: Pacific_D
 * @Description:
 * @FilePath: \learn-react-native\src\components\TypeWriter\index.tsx
 */
import { FC, useEffect, useState } from 'react'
import { StyleSheet, View, Text } from 'react-native'
import Animated, {
  useSharedValue,
  withRepeat,
  withTiming,
  useAnimatedStyle,
  Easing
} from 'react-native-reanimated'
import useTypeWriter, { Phase } from './useTypeWriter'

interface IProps {
  content: Array<string>
}

const TypeWriter: FC<IProps> = ({ content }) => {
  const { typed } = useTypeWriter(content)

  // cursor animation
  // const opacity = useSharedValue(0),
  //   rCursorStyle = useAnimatedStyle(() => ({
  //     opacity: opacity.value
  //   }))
  // opacity.value = withRepeat(
  //   withTiming(1, {
  //     duration: 1000,
  //     easing: Easing.bezier(0.25, 0.1, 0.25, 1)
  //   }),
  //   -1,
  //   false
  // )

  return (
    <View style={styles.container}>
      <Text style={[styles.text]}>{typed}</Text>
      <Animated.Text style={[styles.cursor]}>|</Animated.Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row'
  },
  text: {
    color: '#fff',
    fontSize: 20
  },
  cursor: {
    marginLeft: 4,
    color: '#22d3ee',
    fontSize: 30
  }
})

export default TypeWriter
