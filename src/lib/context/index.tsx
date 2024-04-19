'use client'
import React, { createContext, useContext, useState, useEffect } from 'react'
import { User, UserData } from '@/lib/types'
import { useRouter } from 'next/navigation'
import { routes } from '@/lib/constants'
import { getUserProfile } from '../services/profile'

interface AppContext {
	user: User | null
	userData: UserData | null
	setUserData: React.Dispatch<React.SetStateAction<UserData | null>>
	setUser: React.Dispatch<React.SetStateAction<User | null>>
}

const initUser: AppContext = {
	user: null,
	userData: null,
	setUserData: () => {},
	setUser: () => {},
}

const AppContext = createContext<AppContext>(initUser)

export const useAppContext = () => {
	return useContext(AppContext)
}

export const ContextProvider = ({
	children,
}: {
	children: React.ReactNode
}) => {
	const router = useRouter()
	const [user, setUser] = useState<User | null>(null)
	const [userData, setUserData] = useState<UserData | null>(null)

	useEffect(() => {
		const storedUser = localStorage.getItem('profile')

		if (storedUser) {
			setUser(JSON.parse(storedUser))

			const fetchUserProfile = async () => {
				const res = await getUserProfile(JSON.parse(storedUser).token)
				if (res.success) {
					setUserData(res.data.user)
				}
			}
			fetchUserProfile()
		}

		if (!storedUser) {
			router.push(routes.HOME)
		}
	}, [router])

	const contextValue: AppContext = {
		user,
		userData,
		setUserData,
		setUser,
	}

	return (
		<AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
	)
}
