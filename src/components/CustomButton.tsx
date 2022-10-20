/*
 * @Author: Pacific_D
 * @Date: 2022-10-19 16:17:59
 * @LastEditTime: 2022-10-19 16:19:04
 * @LastEditors: Pacific_D
 * @Description:
 * @FilePath: \learn-react-native\src\components\CustomButton.tsx
 */
import { Text, TouchableOpacity } from 'react-native'
import { FC } from 'react'

interface IProps {
  label: string
  onPress: () => void
}

const CustomButton: FC<IProps> = ({ label, onPress }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        backgroundColor: '#AD40AF',
        padding: 20,
        borderRadius: 10,
        marginBottom: 30
      }}
    >
      <Text
        style={{
          textAlign: 'center',
          fontWeight: '700',
          fontSize: 16,
          color: '#fff'
        }}
      >
        {label}
      </Text>
    </TouchableOpacity>
  )
}

export default CustomButton
