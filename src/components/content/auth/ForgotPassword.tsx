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

interface FormData {
	email: string
}

export default function Login() {
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
				<CardTitle>Zapomniałeś hasła?</CardTitle>
				<CardDescription>
					Wprowadż swój adres email wyślemy Ci link z instrukcją do odzyskania
					dostępu do serwisu.
				</CardDescription>
			</CardHeader>
			<CardContent className="flex flex-col gap-3">
				<Input
					value={formData.email}
					type="email"
					name="email"
					placeholder="Wpisz"
					handleChange={handleChange}
				/>
			</CardContent>
			<CardFooter className="flex flex-col gap-3 pt-7">
				<Button className="w-full">Wyślij</Button>
				<Link
					href="/auth/login"
					className="flex-center underline text-sm text-jc-text4"
				>
					<p>Wróć do logowania</p>
				</Link>
			</CardFooter>
		</Card>
	)
}
