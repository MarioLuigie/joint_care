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
import { useState } from 'react'
import Link from 'next/link'

import Input from '@/components/shared/Input'
import PasswordReqs from './partials/PasswordReqs'
import CheckboxDemo from '@/components/shared/CheckboxLabel'
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
	}

	return (
		<Card className="auth-card">
			<CardHeader>
				<CardTitle>Nie mam konta</CardTitle>
				<CardDescription>
					Utwórz konto i zacznij korzystać z serwisu
				</CardDescription>
			</CardHeader>
			<CardContent className="flex flex-col gap-3">
				<div className="flex flex-col gap-3">
					<Input
						value={formData.email}
						type="email"
						name="email"
						placeholder="Wpisz"
						handleChange={handleChange}
					/>
					<Input
						value={formData.password}
						type="password"
						name="password"
						placeholder="Hasło"
						handleChange={handleChange}
					/>
					<PasswordReqs />
					<div className="flex">
						<CheckboxDemo id="statute">
							<Label htmlFor="statute">Akceptuję</Label>
							<Link
								href="#"
								className="underline text-sm font-medium text-[#030303]"
							>
								Regulamin serwisu
							</Link>
						</CheckboxDemo>
					</div>
				</div>
			</CardContent>
			<CardFooter className="flex pt-5">
				<Link href="/auth/register">
					<Button className="w-full">Załóż konto</Button>
				</Link>
			</CardFooter>
		</Card>
	)
}
