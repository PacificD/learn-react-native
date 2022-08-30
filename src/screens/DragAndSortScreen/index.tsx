/*
 * @Author: Pacific_D
 * @Date: 2022-08-30 14:42:24
 * @LastEditTime: 2022-08-30 16:56:12
 * @LastEditors: Pacific_D
 * @Description:
 * @FilePath: \learn-react-native\src\screens\DragAndSortScreen\index.tsx
 */
import React from 'react'
import Animated, {
  useAnimatedScrollHandler,
  useSharedValue
} from 'react-native-reanimated'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import { DrawerScreenComponent } from '../../types'
import { SONG_HEIGHT } from './conf'
import MovableSong from './MovableSong'
import SONGS, { ISONG } from './SONGS'

function listToObject(list: Array<ISONG>) {
  const values = Object.values(list)
  const object: {
    [key: string]: number
  } = {}

  for (let i = 0; i < values.length; i++) {
    object[values[i].id] = i
  }

  return object
}

const DragAndSortScreen = ({ navigation }: DrawerScreenComponent) => {
  const positions = useSharedValue(listToObject(SONGS)),
    scrollY = useSharedValue(0)

  const handleScroll = useAnimatedScrollHandler(e => {
    scrollY.value = e.contentOffset.y
  })

  return (
    <>
      <SafeAreaProvider>
        <SafeAreaView style={{ flex: 1 }}>
          <Animated.ScrollView
            // ref={scrollViewRef}
            onScroll={handleScroll}
            scrollEventThrottle={16}
            style={{
              flex: 1,
              position: 'relative',
              backgroundColor: 'white'
            }}
            contentContainerStyle={{
              height: SONGS.length * SONG_HEIGHT
            }}
          >
            {SONGS.map(song => (
              <MovableSong
                key={song.id}
                id={song.id}
                artist={song.artist}
                cover={song.cover}
                title={song.title}
                positions={positions}
                scrollY={scrollY}
                songsCount={SONGS.length}
              />
            ))}
          </Animated.ScrollView>
        </SafeAreaView>
      </SafeAreaProvider>
    </>
  )
}

export default DragAndSortScreen
