/*
 * @Author: Pacific_D
 * @Date: 2022-10-18 22:29:52
 * @LastEditTime: 2022-10-18 22:29:52
 * @LastEditors: Pacific_D
 * @Description:
 * @FilePath: \learn-react-native\src\types\react-native-svg.d.ts
 */
import 'react-native-svg'
declare module 'react-native-svg' {
  export interface SvgProps {
    xmlns?: string
    xmlnsXlink?: string
  }
}
