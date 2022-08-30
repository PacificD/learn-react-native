/*
 * @Author: Pacific_D
 * @Date: 2022-08-30 15:04:15
 * @LastEditTime: 2022-08-30 16:19:36
 * @LastEditors: Pacific_D
 * @Description:
 * @FilePath: \learn-react-native\src\screens\DragAndSortScreen\MovableSong.tsx
 */

import { FC, useState } from 'react'
import { View } from 'react-native'
import {
  PanGestureHandler,
  PanGestureHandlerGestureEvent
} from 'react-native-gesture-handler'
import Animated, {
  runOnJS,
  SharedValue,
  useAnimatedGestureHandler,
  useAnimatedReaction,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming
} from 'react-native-reanimated'
import { SONG_HEIGHT } from './conf'
import Song from './Song'

type Position = {
  [key: string]: number
}

interface IProps {
  id: string
  artist: string
  cover: string
  title: string
  positions: SharedValue<Position>
  scrollY: SharedValue<number>
  songsCount: number
}

function clamp(value: number, lowerBound: number, upperBound: number) {
  'worklet'
  return Math.max(lowerBound, Math.min(value, upperBound))
}

function objectMove(object: Position, from: number, to: number) {
  'worklet'
  const newObject = Object.assign({}, object)

  for (const id in object) {
    if (object[id] === from) {
      newObject[id] = to
    }

    if (object[id] === to) {
      newObject[id] = from
    }
  }

  return newObject
}

const MovableSong: FC<IProps> = ({
  id,
  artist,
  cover,
  title,
  positions,
  scrollY,
  songsCount
}) => {
  const [moving, setMoving] = useState(false),
    top = useSharedValue(positions.value[id] * SONG_HEIGHT)

  useAnimatedReaction(
    () => positions.value[id],
    (currentPosition, previousPosition) => {
      if (currentPosition !== previousPosition) {
        if (!moving) {
          top.value = withSpring(currentPosition * SONG_HEIGHT)
        }
      }
    },
    [moving]
  )

  const gestureHandler =
    useAnimatedGestureHandler<PanGestureHandlerGestureEvent>({
      onStart: () => {
        runOnJS(setMoving)(true)
      },
      onActive: e => {
        const positionY = e.absoluteY + scrollY.value

        top.value = withTiming(positionY - SONG_HEIGHT, {
          duration: 16
        })

        const newPosition = clamp(
          Math.floor(positionY / SONG_HEIGHT),
          0,
          songsCount - 1
        )

        if (newPosition !== positions.value[id]) {
          positions.value = objectMove(
            positions.value,
            positions.value[id],
            newPosition
          )
        }
      },
      onFinish: () => {
        top.value = positions.value[id] * SONG_HEIGHT
        runOnJS(setMoving)(false)
      }
    })

  const animatedStyle = useAnimatedStyle(
    () => ({
      top: top.value,
      shadowOpacity: withSpring(moving ? 0.2 : 0)
    }),
    [moving]
  )

  return (
    <Animated.View
      style={[
        animatedStyle,
        {
          position: 'absolute',
          left: 0,
          right: 0,
          backgroundColor: 'white',
          zIndex: moving ? 1 : 0,
          shadowColor: 'black',
          shadowOffset: {
            width: 0,
            height: 0
          },
          shadowRadius: 10,
          elevation: 5
        }
      ]}
    >
      <PanGestureHandler onGestureEvent={gestureHandler}>
        <Animated.View style={{ maxWidth: '80%' }}>
          <Song artist={artist} cover={cover} title={title} />
        </Animated.View>
      </PanGestureHandler>
    </Animated.View>
  )
}

export default MovableSong
