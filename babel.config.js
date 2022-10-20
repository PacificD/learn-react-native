/**
 * @Author: Pacific_D
 * @Date: 2022-08-29 21:03:44
 * @LastEditTime: 2022-10-20 15:54:15
 * @LastEditors: Pacific_D
 * @Description: 
 * @FilePath: \learn-react-native\babel.config.js
 */
module.exports = function (api) {
  api.cache(true)
  return {
    presets: ['babel-preset-expo'],
    plugins: ['react-native-reanimated/plugin', ["module-resolver", {
      "alias": {
        "@navigation": "./src/navigation",
        "@components": "./src/components",
        "@screens": "./src/screens",
        "@assets": "./assets"
      },
      "extensions": [
        ".js",
        ".jsx",
        ".ts",
        ".tsx",
      ]
    }]]
  }
}
