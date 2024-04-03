'use client'
import React, { createContext, useContext, useState } from "react"

interface User {
  data: {}
  message: string
  success: boolean
}

interface AppContext {
  user: User | null;
  setUser: React.Dispatch<React.SetStateAction<User | null>>
}

const AppContext = createContext<AppContext | null>(null)

export const useAppContext = () => {
  return useContext(AppContext)
}

export const ContextProvider = ({ children }: { children: React.ReactNode }) => {
  // const storedUser: string | null = localStorage.getItem('profile')
  // console.log('Stored user:', storedUser)
  // console.log('Stored user:', storedUser === null)

  // const parsedUser = () => {
  //   try {
  //     if (storedUser) {
  //       const parsed = JSON.parse(storedUser)
  //       console.log('Parsed user:', parsed)
  //       return parsed
  //     }
  //   } catch (err) {
  //     console.error('Error parsing data from localStorage:', err)
  //   }
  //   return null
  // }

  // console.log("Parsed user:", parsedUser());

  const [user, setUser] = useState<User | null>(null)

  const contextValue: AppContext = {
    user,
    setUser
  }

  return (
    <AppContext.Provider value={contextValue}>
      {children}
    </AppContext.Provider>
  )
}
