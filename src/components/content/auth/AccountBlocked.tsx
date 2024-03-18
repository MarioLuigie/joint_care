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
import { useState } from 'react'

import Input from '@/components/shared/Input'
import LoginAgain from '@/components/content/auth/partials/LoginAgain'

interface FormData {
	email: string
}

export default function AccountBlocked() {
	const initFormData: FormData = {
		email: '',
	}

	const [formData, setFormData] = useState(initFormData)

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		})
	}

	return (
		<Card className="auth-card">
			<CardHeader>
				<CardTitle>Twoje konto zostało zablokowane</CardTitle>
				<CardDescription>
					Przekroczona została maksymalna liczba nieudanych logowań - konto zostało zablokowane.
				</CardDescription>
			</CardHeader>
			<CardContent className="flex flex-col gap-3">
				<LoginAgain />
			</CardContent>
			<CardFooter className="flex flex-col gap-3 pt-7">
				<Button className="w-full">Zaloguj</Button>
				<Link
					href="/auth/forgot-password"
					className="flex-center underline text-sm text-jc-text4"
				>
					<p>Zapomniałem hasło</p>
				</Link>
			</CardFooter>
		</Card>
	)
}
