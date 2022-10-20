/*
 * @Author: Pacific_D
 * @Date: 2022-08-29 21:03:44
 * @LastEditTime: 2022-10-18 21:13:34
 * @LastEditors: Pacific_D
 * @Description:
 * @FilePath: \learn-react-native\src\theme.ts
 */
import { extendTheme } from 'native-base'

const config = {
  useSystemColorMode: false,
  initialColorMode: 'light'
}

const colors = {
  primary: {
    50: '#EEF2F6',
    100: '#CFD9E7',
    200: '#B1C1D8',
    300: '#92A9C9',
    400: '#7491B9',
    500: '#5578AA',
    600: '#446088',
    700: '#334866',
    800: '#223044',
    900: '#111822'
  }
}

export default extendTheme({ config, colors })
