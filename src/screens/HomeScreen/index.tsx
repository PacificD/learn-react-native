/*
 * @Author: Pacific_D
 * @Date: 2022-10-21 14:13:14
 * @LastEditTime: 2022-10-22 16:16:17
 * @LastEditors: Pacific_D
 * @Description:
 * @FilePath: \learn-react-native\src\screens\HomeScreen\index.tsx
 */
import React, { useRef, useMemo, useCallback, useState, useEffect } from 'react'
import { useAsyncStorage } from '@react-native-async-storage/async-storage'
import { View, Text, Button, Icon } from 'native-base'
import { Ionicons } from '@expo/vector-icons'
import BottomSheet from '@gorhom/bottom-sheet'
import { DrawerScreenComponent } from '../../types'
import { CustomButton } from '@components'
import InterpolateColors from './InterpolateColors'

const PROMPTS = [
  'Hello world!',
  'In the pipe, five by five!',
  'Life is simple Code.'
]

const HomeScreen = ({ navigation }: DrawerScreenComponent) => {
  // bottomSheet
  const bottomSheetRef = useRef<BottomSheet>(null),
    snapPoints = useMemo(() => ['25%', '50%', '85%'], []),
    handleSheetChanges = useCallback((index: number) => {
      console.log('handleSheetChanges', index)
    }, []),
    handleClosePress = useCallback(() => bottomSheetRef.current?.collapse(), [])

  // async storage
  const [value, setValue] = useState('HAHA'),
    { getItem, setItem } = useAsyncStorage('@storage_key')
  const readItemFromStorage = async () => {
      const item = await getItem()
      setValue(item!)
    },
    writeItemToStorage = async (newValue: string) => {
      await setItem(newValue)
      setValue(newValue)
    }

  useEffect(() => {
    readItemFromStorage()
  }, [])

  return (
    <View flex={1}>
      <InterpolateColors />
      <BottomSheet
        ref={bottomSheetRef}
        index={1}
        snapPoints={snapPoints}
        onChange={handleSheetChanges}
      >
        <View flex={1} alignItems="center" w="full">
          <CustomButton
            onPress={handleClosePress}
            label="minimize"
          ></CustomButton>
          <View marginY={12}>
            <Text>Current value: {value}</Text>
            <Button
              colorScheme="secondary"
              mt={4}
              leftIcon={
                <Icon as={Ionicons} name="cloud-upload-outline" size="sm" />
              }
              onPress={() =>
                writeItemToStorage(Math.random().toString(36).substr(2, 5))
              }
            >
              Update value
            </Button>
          </View>
        </View>
      </BottomSheet>
    </View>
  )
}

export default HomeScreen
