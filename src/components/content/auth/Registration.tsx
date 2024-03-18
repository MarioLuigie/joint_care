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
import InputPassword from '@/components/shared/InputPassword'
import PasswordReqs from './partials/PasswordReqs'
import Warning from './partials/Warning'
import CheckboxLabel from '@/components/shared/CheckboxLabel'
import { Label } from '@/components/ui/label'

interface FormData {
	email: string
	password: string
}

export default function Registration() {
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
					<Warning>
						<p>Konto z tym adresem e-mail jest już zarejestrowane.</p>
						<div className='flex gap-2 text-jc-text1'>
							<Link href="#" className="jc-warning-link">
								Zaloguj się
							</Link>
							<p>lub</p>
							<Link href="#" className="jc-warning-link">
								Przypomnij hasło
							</Link>
						</div>
					</Warning>
					<Input
						value={formData.email}
						type="email"
						name="email"
						placeholder="Wpisz"
						label="Adres e-mail"
						handleChange={handleChange}
					/>
					<InputPassword
						value={formData.password}
						type="password"
						name="password"
						placeholder="Hasło"
						label="Hasło"
						handleChange={handleChange}
					/>
					<PasswordReqs />
					<div className="flex">
						<CheckboxLabel id="statute">
							<Label htmlFor="statute">Akceptuję</Label>
							<Link
								href="#"
								className="underline text-sm font-medium text-[#030303]"
							>
								Regulamin serwisu
							</Link>
						</CheckboxLabel>
					</div>
				</div>
			</CardContent>
			<CardFooter className="flex flex-col pt-5">
				<Link href="/auth/register">
					<Button className="w-full">Załóż konto</Button>
				</Link>
			</CardFooter>
		</Card>
	)
}
