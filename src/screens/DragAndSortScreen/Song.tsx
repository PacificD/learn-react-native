/*
 * @Author: Pacific_D
 * @Date: 2022-08-30 14:57:49
 * @LastEditTime: 2022-08-30 15:06:52
 * @LastEditors: Pacific_D
 * @Description:
 * @FilePath: \learn-react-native\src\screens\DragAndSortScreen\Song.tsx
 */

import React, { FC } from 'react'
import { View, Image, Text } from 'react-native'
import { SONG_HEIGHT } from './conf'

interface IProps {
  artist: string
  cover: string
  title: string
}

const Song: FC<IProps> = ({ artist, cover, title }) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        height: SONG_HEIGHT,
        padding: 10
      }}
    >
      <Image
        source={{ uri: cover }}
        style={{ height: 50, width: 50, borderRadius: 4 }}
      />

      <View
        style={{
          marginLeft: 10
        }}
      >
        <Text
          style={{
            fontSize: 16,
            fontWeight: '600',
            marginBottom: 4
          }}
        >
          {title}
        </Text>

        <Text style={{ fontSize: 12, color: 'gray' }}>{artist}</Text>
      </View>
    </View>
  )
}

export default Song
