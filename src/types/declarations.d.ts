/*
 * @Author: Pacific_D
 * @Date: 2022-10-18 22:38:44
 * @LastEditTime: 2022-10-18 22:38:45
 * @LastEditors: Pacific_D
 * @Description:
 * @FilePath: \learn-react-native\src\types\declarations.d.ts
 */
declare module '*.svg' {
  import React from 'react'
  import { SvgProps } from 'react-native-svg'
  const content: React.FC<SvgProps>
  export default content
}
