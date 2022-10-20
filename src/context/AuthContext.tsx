/*
 * @Author: Pacific_D
 * @Date: 2022-10-18 20:56:22
 * @LastEditTime: 2022-10-19 15:13:37
 * @LastEditors: Pacific_D
 * @Description:
 * @FilePath: \learn-react-native\src\context\AuthContext.tsx
 */
import { createContext, FC, useState } from 'react'

export const AuthContext = createContext<{
  isLoading: boolean
  userToken: string | null
  login: () => void
  logout: () => void
}>({} as any)

interface IProps {
  children: React.ReactNode
}

const AuthProvider: FC<IProps> = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true),
    [userToken, setUserToken] = useState<string | null>(null)

  const login = () => {
      setUserToken('kna14ldf09nm7n5')
      setIsLoading(false)
    },
    logout = () => {
      setUserToken(null)
      setIsLoading(false)
    }

  return (
    <AuthContext.Provider value={{ login, logout, isLoading, userToken }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
