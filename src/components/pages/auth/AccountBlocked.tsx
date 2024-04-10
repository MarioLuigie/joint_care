'use client'
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { routes } from '@/lib/constants'
import { useRouter } from 'next/navigation'
import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function AccountBlocked() {
	const currentRemainingTime: any =
		typeof window !== 'undefined' ? localStorage.getItem('remainingTime') : null

	const initRemainingTime: number = Number(currentRemainingTime) || 180

	const [remainingTime, setRemainingTime] = useState<number>(initRemainingTime)
	const router = useRouter()

	const handleLogin = () => {
		router.push(routes.AUTH_LOGIN)
	}

	const LoginAgainTiming = () => (
		<div className="flex items-center gap-3">
			<p>Zaloguj się ponownie za</p>
			<div className="flex gap-2">
				<div className="flex-center rounded bg-[#F5F8FC] w-[30px] h-[30px] text-base text-[#030303] font-semibold">
					2
				</div>
				<p>:</p>
				<div className="flex-center rounded bg-[#F5F8FC] w-[30px] h-[30px] text-base text-[#030303] font-semibold">
					46
				</div>
			</div>
		</div>
	)

	useEffect(() => {
		const interval = setInterval(() => {
			if (remainingTime > 0) {
				setRemainingTime((prev) => prev - 1)
				localStorage.setItem('remainingTime', (remainingTime - 1).toString())
			}
		}, 1000)

		localStorage.removeItem('remainingTime')
		setRemainingTime(initRemainingTime)

		return () => clearInterval(interval)
	}, [remainingTime, initRemainingTime])

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
				<Button
					onClick={handleLogin}
					disabled={remainingTime ? true : false}
					className="w-full"
				>
					Zaloguj
				</Button>
				<Link
					href={routes.AUTH_FORGOT_PASSWORD}
					className="flex-center underline text-sm text-jc-text4"
				>
					<p>Zapomniałem hasło</p>
				</Link>
			</CardFooter>
		</Card>
	)
}
