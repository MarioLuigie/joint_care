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
import { ForgotPasswordValidationErrors } from '@/lib/types'
import { errorMsg } from '@/lib/constants'
import { ForgotPasswordFormData } from '@/lib/types'
import { validateForgotPassword } from '@/lib/utils/validation'

export default function ForgotPassword() {
	const initForgotPasswordFormData: ForgotPasswordFormData = {
		email: ''
	}

	const initForgotPasswordValidationErrors: ForgotPasswordValidationErrors = {
		email: false
	}

	const [ forgotPasswordFormData, setForgotPasswordFormData ] = useState<ForgotPasswordFormData>(initForgotPasswordFormData)
	const [ isServerError, setIsServerError ] = useState<boolean>(false)
	const [ isClientError, setIsClientError ] = useState<boolean>(false)
	const [ forgotPasswordValidationErrors, setForgotPasswordValidationErrors ] = useState<ForgotPasswordValidationErrors>(initForgotPasswordValidationErrors)

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {

		const updatedFormData = {
			...forgotPasswordFormData,
			email: e.target.value
		}

		setForgotPasswordValidationErrors(validateForgotPassword(updatedFormData))
		setForgotPasswordFormData(updatedFormData)
	}

	const handleSubmit = () => {
		console.log("Send");
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
					<div className='flex gap-1'>
						<p>Sprawdź poprawność adresu lub</p>
						<Link href="/auth/register">
							<p className='jc-warning-link underline'>utwórz nowe konto</p>
						</Link>
					</div>
				</AlertNotif>
				<Input
					value={forgotPasswordFormData.email}
					type="email"
					name="email"
					placeholder="Wpisz"
					label="Adres e-mail"
					handleChange={handleChange}
					isClientError={isClientError}
					specificErrors={[
						{error: forgotPasswordValidationErrors.email, msg: errorMsg.EMAIL}
					]}
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
