'use client'
import { Button } from '@/components/ui/button'
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/card'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'

import LoginAgainTiming from '@/components/content/auth/partials/LoginAgainTiming'
import { routes } from '@/lib/constants'

export default function AccountBlocked() {

	const currentRemainingTime: any = typeof window !== 'undefined' 
		? localStorage.getItem('remainingTime') 
		: null

	const initRemainingTime: number = Number(currentRemainingTime) || 180 
	
	const [ remainingTime, setRemainingTime] = useState<number>(initRemainingTime)
	const router = useRouter()

	
	useEffect(() => {
		const interval = setInterval(() => {
			if(remainingTime > 0) {
				setRemainingTime(prev => prev - 1)
				localStorage.setItem('remainingTime', (remainingTime - 1).toString())
			}
		}, 1000)
		
		localStorage.removeItem('remainingTime')
		setRemainingTime(initRemainingTime)
		
		return () => clearInterval(interval)
		
	}, [remainingTime])
	
	const handleLogin = () => {
		router.push(routes.LOGIN)
	}
	
	console.log('***', currentRemainingTime);
	console.log('***', initRemainingTime);
	console.log('***', remainingTime);
	
	return (
		<Card className="auth-card">
			<CardHeader>
				<CardTitle>Twoje konto zostało zablokowane</CardTitle>
				<CardDescription>
					Przekroczona została maksymalna liczba nieudanych logowań - konto
					zostało zablokowane.
				</CardDescription>
			</CardHeader>
			<CardContent className="flex flex-col gap-3">
				<LoginAgainTiming />
			</CardContent>
			<CardFooter className="flex flex-col gap-3 pt-7">
				<Button onClick={handleLogin} disabled={remainingTime ? true : false} className="w-full">Zaloguj</Button>
				<Link
					href={routes.FORGOT_PASSWORD}
					className="flex-center underline text-sm text-jc-text4"
				>
					<p>Zapomniałem hasło</p>
				</Link>
			</CardFooter>
		</Card>
	)
}
