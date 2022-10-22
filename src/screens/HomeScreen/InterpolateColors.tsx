/*
 * @Author: Pacific_D
 * @Date: 2022-10-22 16:08:02
 * @LastEditTime: 2022-10-22 16:38:27
 * @LastEditors: Pacific_D
 * @Description:
 * @FilePath: \learn-react-native\src\screens\HomeScreen\InterpolateColors.tsx
 */
import { FC, useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import { Dimensions, StyleSheet, Switch, Text, View } from 'react-native'
import Animated, {
  interpolateColor,
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withTiming
} from 'react-native-reanimated'
import { Theme } from '@types'

const Colors = {
    dark: {
      background: '#1E1E1E',
      circle: '#252525',
      text: '#F8F8F8'
    },
    light: {
      background: '#F8F8F8',
      circle: '#FFF',
      text: '#1E1E1E'
    }
  },
  SWITCH_TRACK_COLOR = {
    true: 'rgba(256, 0, 256, 0.2)',
    false: 'rgba(0,0,0,0.1)'
  }

const SIZE = Dimensions.get('window').width * 0.7

const InterpolateColors: FC = () => {
  const [theme, setTheme] = useState<Theme>('light'),
    progress = useDerivedValue(
      () => (theme === 'dark' ? withTiming(1) : withTiming(0)),
      [theme]
    ),
    rStyle = useAnimatedStyle(() => ({
      backgroundColor: interpolateColor(
        progress.value,
        [0, 1],
        [Colors.light.background, Colors.dark.background]
      )
    })),
    rCircleStyle = useAnimatedStyle(() => ({
      backgroundColor: interpolateColor(
        progress.value,
        [0, 1],
        [Colors.light.circle, Colors.dark.circle]
      )
    })),
    rTextStyle = useAnimatedStyle(() => ({
      color: interpolateColor(
        progress.value,
        [0, 1],
        [Colors.light.text, Colors.dark.text]
      )
    }))

  return (
    <Animated.View style={[styles.container, rStyle]}>
      <Animated.Text style={[styles.text, rTextStyle]}>
        react native
      </Animated.Text>
      <Animated.View style={[styles.circle, rCircleStyle]}>
        <Switch
          value={theme === 'dark'}
          trackColor={SWITCH_TRACK_COLOR}
          thumbColor="violet"
          onValueChange={toggled => {
            setTheme(toggled ? 'dark' : 'light')
          }}
        />
      </Animated.View>
    </Animated.View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center'
    // justifyContent: 'center'
  },
  circle: {
    marginTop: 16,
    width: SIZE,
    height: SIZE,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: SIZE / 2,
    shadowOffset: {
      width: 0,
      height: 20
    },
    shadowRadius: 10,
    shadowOpacity: 0.1,
    elevation: 8
  },
  text: {
    fontSize: 70,
    textTransform: 'uppercase',
    fontWeight: '700',
    letterSpacing: 14,
    marginBottom: 35
  }
})

export default InterpolateColors
