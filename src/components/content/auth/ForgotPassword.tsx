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
import AlertNotif from "@/components/content/auth/partials/AlertNotif"

interface FormData {
	email: string
}

export default function ForgotPassword() {
	const initFormData: FormData = {
		email: '',
	}

	const [ formData, setFormData ] = useState<FormData>(initFormData)
	const [ errors, setErrors ] = useState<boolean>(false)

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		})
	}

	const handleSubmit = () => {
		console.log("Send");
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
				{errors && (
					<AlertNotif>
						<p>Konto o podanym adresie e-mail nie istnieje.</p>
						<div className='flex gap-1'>
							<p>Sprawdź poprawność adresu lub</p>
							<Link href="/auth/register">
								<p className='jc-warning-link underline'>utwórz nowe konto</p>
							</Link>
						</div>
					</AlertNotif>
				)}
				<Input
					value={formData.email}
					type="email"
					name="email"
					placeholder="Wpisz"
					label="Adres e-mail"
					handleChange={handleChange}
				/>
			</CardContent>
			<CardFooter className="flex flex-col gap-3 pt-7">
				<Button className="w-full" onClick={handleSubmit}>Wyślij</Button>
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
