/*
 * @Author: Pacific_D
 * @Date: 2022-08-29 21:45:50
 * @LastEditTime: 2022-08-29 23:08:05
 * @LastEditors: Pacific_D
 * @Description:
 * @FilePath: \learn-react-native\src\screens\SwipeToDeleteScreen\index.tsx
 */
import { DrawerScreenComponent } from '../../types'
import { StyleSheet, SafeAreaView } from 'react-native'
import TASKS, { ITask } from './task'
import { useCallback, useRef, useState } from 'react'
import { View, Text } from 'native-base'
import { ScrollView } from 'react-native-gesture-handler'
import ListItem from './ListItem'

const BACKGROUND_COLOR = '#FAFBFF'

const SwipeToDeleteScreen = ({ navigation }: DrawerScreenComponent) => {
  const [tasks, setTasks] = useState(TASKS)

  const onDismiss = useCallback((task: ITask) => {
    setTasks(tasks => tasks.filter(item => item.index !== task.index))
  }, [])

  const scrollRef = useRef(null)

  return (
    <SafeAreaView style={styles.container}>
      <Text fontSize={40} marginY={2} paddingLeft="5%">
        Tasks
      </Text>
      <ScrollView style={styles.scrollView}>
        {tasks.map(task => (
          <ListItem
            key={task.index}
            task={task}
            onDismiss={onDismiss}
            simultaneousHandlers={scrollRef}
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BACKGROUND_COLOR
  },
  scrollView: {
    flex: 1,
    width: '100%',
    contentContainerStyle: {
      alignItems: 'center'
    }
  }
})

export default SwipeToDeleteScreen
