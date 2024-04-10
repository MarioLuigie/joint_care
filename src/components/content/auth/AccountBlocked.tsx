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

import { routes } from '@/lib/constants'

function LoginAgainTiming() {
	interface TimeChank {
		time: string
	}

	const TimeChank = ({ time }: TimeChank) => (
		<div className="flex-center rounded bg-[#F5F8FC] w-[30px] h-[30px] text-base text-[#030303] font-semibold">
			{time}
		</div>
	)

	return (
		<div className="flex items-center gap-3">
			<p>Zaloguj się ponownie za</p>
			<div className="flex gap-2">
				<TimeChank time="2" />
				<p>:</p>
				<TimeChank time="46" />
			</div>
		</div>
	)
}

export default function AccountBlocked() {
	const currentRemainingTime: any =
		typeof window !== 'undefined' ? localStorage.getItem('remainingTime') : null

	const initRemainingTime: number = Number(currentRemainingTime) || 180

	const [remainingTime, setRemainingTime] = useState<number>(initRemainingTime)
	const router = useRouter()

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

	const handleLogin = () => {
		router.push(routes.LOGIN)
	}

	console.log('***', currentRemainingTime)
	console.log('***', initRemainingTime)
	console.log('***', remainingTime)

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
					href={routes.FORGOT_PASSWORD}
					className="flex-center underline text-sm text-jc-text4"
				>
					<p>Zapomniałem hasło</p>
				</Link>
			</CardFooter>
		</Card>
	)
}
