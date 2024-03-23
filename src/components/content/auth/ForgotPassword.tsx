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
import AlertNotif from '@/components/content/auth/partials/AlertNotif'
import { ForgotPasswordFormErrors as ForgotPasswordFormErrors, ForgotPasswordFormData } from '@/lib/types'
import { validateForgotPassword } from '@/lib/utils/validators'
import { errorMsg } from '@/lib/constants'

export default function ForgotPassword() {
	const initFormData: ForgotPasswordFormData = {
		email: '',
	}
	const initFormErrors: ForgotPasswordFormErrors = {
		email: [errorMsg.EMPTY],
	}

	const [formData, setFormData] = useState<ForgotPasswordFormData>(initFormData)
	const [formErrors, setFormErrors] = useState<ForgotPasswordFormErrors>(initFormErrors)

	const [isServerError, setIsServerError] = useState<boolean>(false)
	const [isClientError, setIsClientError] = useState<boolean>(false)

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const updatedFormData = {
			...formData,
			email: e.target.value,
		}

		setFormErrors(validateForgotPassword(updatedFormData))
		setFormData(updatedFormData)
	}

	const handleSubmit = () => {
		console.log('Send')
		setIsClientError(true)
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
				<AlertNotif isError={isServerError}>
					<p>Konto o podanym adresie e-mail nie istnieje.</p>
					<div className="flex gap-1">
						<p>Sprawdź poprawność adresu lub</p>
						<Link href="/auth/register">
							<p className="jc-warning-link underline">utwórz nowe konto</p>
						</Link>
					</div>
				</AlertNotif>
				<Input
					handleChange={handleChange}
					label="Adres e-mail"
					name="email"
					placeholder="Wpisz"
					type="email"
					isError={isClientError}
					errors={formErrors.email}
					value={formData.email}
				/>
			</CardContent>
			<CardFooter className="flex flex-col gap-3 pt-7">
				<Button className="w-full" onClick={handleSubmit}>
					Wyślij
				</Button>
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
