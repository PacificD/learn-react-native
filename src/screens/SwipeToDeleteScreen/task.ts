/*
 * @Author: Pacific_D
 * @Date: 2022-08-29 21:46:22
 * @LastEditTime: 2022-08-29 22:50:24
 * @LastEditors: Pacific_D
 * @Description:
 * @FilePath: \learn-react-native\src\screens\SwipeToDeleteScreen\task.ts
 */
const TITLES = [
  'React Native',
  'TypeScript👍🏼',
  'Redux Toolkit',
  'NestJS🚀',
  'DenoJS',
  'VueJS',
  'KOA'
]

export interface ITask {
  title: string
  index: number
}

const TASKS: Array<ITask> = TITLES.map((title, index) => ({ title, index }))

export default TASKS
