'use client'
import React, { createContext, useContext, useState } from "react"
import { User } from '@/lib/types'

interface AppContext {
  user: User | null;
  setUser: React.Dispatch<React.SetStateAction<User | null>>
}

const AppContext = createContext<AppContext | null>(null)

export const useAppContext = () => {
  return useContext(AppContext)
}

export const ContextProvider = ({ children }: { children: React.ReactNode }) => {
  // const storedUser = localStorage.getItem('profile')

  // const parsedUser = () => {
  //   try {
  //     if (storedUser) {
  //       return JSON.parse(storedUser)
  //     }
  //   } catch (err) {
  //     console.error('Error parsing data from localStorage:', err)
  //   }
  //   return null
  // }

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