/*
 * @Author: Pacific_D
 * @Date: 2022-08-29 21:57:31
 * @LastEditTime: 2022-08-29 23:04:07
 * @LastEditors: Pacific_D
 * @Description:
 * @FilePath: \learn-react-native\src\screens\SwipeToDeleteScreen\ListItem.tsx
 */
import { FC } from 'react'
import { ITask } from './task'
import { Dimensions, StyleSheet, Text, View } from 'react-native'
import {
  PanGestureHandler,
  PanGestureHandlerGestureEvent,
  PanGestureHandlerProps
} from 'react-native-gesture-handler'
import Animated, {
  runOnJS,
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withTiming
} from 'react-native-reanimated'
import { FontAwesome5 } from '@expo/vector-icons'

interface IProps extends Pick<PanGestureHandlerProps, 'simultaneousHandlers'> {
  task: ITask
  onDismiss?: (task: ITask) => void
}

const LIST_ITEM_HEIGHT = 60,
  { width: SCREEN_WIDTH } = Dimensions.get('window'),
  TRANSLATE_X_THRESHOLE = -SCREEN_WIDTH * 0.3

const ListItem: FC<IProps> = ({ task, onDismiss, simultaneousHandlers }) => {
  const translateX = useSharedValue(0),
    itemHeight = useSharedValue(LIST_ITEM_HEIGHT),
    marginVertical = useSharedValue(10),
    opacity = useSharedValue(1)

  const panGesture = useAnimatedGestureHandler<PanGestureHandlerGestureEvent>({
    onActive: e => {
      translateX.value = e.translationX
    },
    onEnd: () => {
      const shouldBeDismissed = translateX.value < TRANSLATE_X_THRESHOLE
      if (shouldBeDismissed) {
        translateX.value = withTiming(-SCREEN_WIDTH)
        itemHeight.value = withTiming(0)
        marginVertical.value = withTiming(0)
        opacity.value = withTiming(0, undefined, isFinished => {
          if (isFinished && onDismiss) {
            runOnJS(onDismiss)(task)
          }
        })
      } else {
        translateX.value = withTiming(0)
      }
    }
  })

  const rStyle = useAnimatedStyle(() => ({
    transform: [
      {
        translateX: translateX.value
      }
    ]
  }))

  const rIconContainerStyle = useAnimatedStyle(() => {
    const opacity = withTiming(translateX.value < TRANSLATE_X_THRESHOLE ? 1 : 0)
    return {
      opacity
    }
  })

  const rTaskContainerStyle = useAnimatedStyle(() => ({
    height: itemHeight.value,
    marginVertical: marginVertical.value,
    opacity: opacity.value
  }))

  return (
    <Animated.View style={[styles.taskContainer, rTaskContainerStyle]}>
      <Animated.View style={[styles.iconContainer, rIconContainerStyle]}>
        <FontAwesome5
          name="trash-alt"
          size={LIST_ITEM_HEIGHT * 0.4}
          color="red"
        />
      </Animated.View>
      <PanGestureHandler
        onGestureEvent={panGesture}
        simultaneousHandlers={simultaneousHandlers}
      >
        <Animated.View style={[styles.task, rStyle]}>
          <Text style={styles.taskTitle}>{task.title}</Text>
        </Animated.View>
      </PanGestureHandler>
    </Animated.View>
  )
}

const styles = StyleSheet.create({
  taskContainer: {
    width: '100%',
    alignItems: 'center'
  },
  task: {
    width: '90%',
    height: LIST_ITEM_HEIGHT,
    justifyContent: 'center',
    paddingLeft: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    // Shadow for iOS
    shadowOpacity: 0.08,
    shadowOffset: {
      width: 0,
      height: 20
    },
    shadowRadius: 10,
    // Shadow for Android
    elevation: 5
  },
  taskTitle: {
    fontSize: 16
  },
  iconContainer: {
    height: LIST_ITEM_HEIGHT,
    width: LIST_ITEM_HEIGHT,
    position: 'absolute',
    right: '10%',
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default ListItem
