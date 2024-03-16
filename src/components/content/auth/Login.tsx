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
import IncorrectData from '@/components/content/auth/partials/IncorrectData'
import CheckboxLabel from '@/components/shared/CheckboxLabel'
import { Label } from '@/components/ui/label'

interface FormData {
	email: string
	password: string
}

export default function Login() {
	const initFormData: FormData = {
		email: '',
		password: '',
	}

	const [formData, setFormData] = useState(initFormData)

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		})
		console.log(formData)
	}

	return (
		<Card className="auth-card">
			<CardHeader>
				<CardTitle>Zaloguj się</CardTitle>
				<CardDescription>Chcę się zalogować</CardDescription>
			</CardHeader>
			<CardContent className="flex flex-col gap-3">
				<div className="flex flex-col gap-3 pb-5">
					<IncorrectData />
					<Input
						value={formData.email}
						type="email"
						name="email"
						placeholder="Wpisz"
						label="Adres e-mail"
						handleChange={handleChange}
					/>
					<Input
						value={formData.password}
						type="password"
						name="password"
						placeholder="Hasło"
						label="Hasło"
						handleChange={handleChange}
					/>
				</div>
				<CheckboxLabel id="remember">
					<Label htmlFor="remember">Zapamiętaj mnie</Label>
				</CheckboxLabel>
			</CardContent>
			<CardFooter className="flex flex-col gap-2 pt-5">
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
