'use client'
import React, { createContext, useContext, useState, useEffect } from 'react'
import { User } from '@/lib/types'
import { useRouter } from 'next/navigation'
import { routes } from '@/lib/constants'

interface AppContext {
	user: User | null
	setUser: React.Dispatch<React.SetStateAction<User | null>>
}

const initUser: AppContext = {
	user: null,
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
	const [user, setUser] = useState<User | null>(null)

	const router = useRouter()

	console.log('User from Context:', user)

	useEffect(() => {
		const storedUser = localStorage.getItem('profile')

		if (storedUser) {
			setUser(JSON.parse(storedUser))
		}

		if (!storedUser) {
			router.push(routes.HOME)
		}
	}, [router])

	const contextValue: AppContext = {
		user,
		setUser,
	}

	return (
		<AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
	)
}
