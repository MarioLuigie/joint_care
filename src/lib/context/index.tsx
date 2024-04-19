'use client'
import React, { createContext, useContext, useState, useEffect } from 'react'
import { UserData } from '@/lib/types'
import { useRouter } from 'next/navigation'
import { routes } from '@/lib/constants'
import { getUserProfile } from '../services/profile'

interface AppContext {
	token: string | null
	userData: UserData | null
	setUserData: React.Dispatch<React.SetStateAction<UserData | null>>
	setToken: React.Dispatch<React.SetStateAction<string | null>>
}

const initUser: AppContext = {
	token: null,
	userData: null,
	setUserData: () => {},
	setToken: () => {},
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
	const [token, setToken] = useState<string | null>(null)
	const [userData, setUserData] = useState<UserData | null>(null)

	console.log(userData)

	useEffect(() => {
		const storedToken = localStorage.getItem('token')

		if (storedToken) {
			setToken(JSON.parse(storedToken))

			const fetchUserProfile = async () => {
				const res = await getUserProfile(JSON.parse(storedToken))
				if (res.success) {
					setUserData(res.data.user)
				}
			}
			fetchUserProfile()
		}

		if (!storedToken) {
			router.push(routes.HOME)
		}
	}, [router])

	const contextValue: AppContext = {
		token,
		userData,
		setUserData,
		setToken
	}

	return (
		<AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
	)
}
