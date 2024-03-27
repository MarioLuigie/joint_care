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

import Input from '@/components/shared/inputs/Input'
import AlertNotif from '@/components/shared/notifs/AlertNotif'
import { ForgotPasswordFormErrors as ForgotPasswordFormErrors, ForgotPasswordFormData } from '@/lib/types'
import { validateForgotPassword } from '@/lib/utils/validators'
import { errorMsg, routes } from '@/lib/constants'
import AccountNotExistAlert from './partials/notifs/AccountNotExistAlert'

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
				<AlertNotif 
					isError={isServerError}
					content={<AccountNotExistAlert />}
				/>
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
					href={routes.LOGIN}
					className="flex-center underline text-sm text-jc-text4"
				>
					<p>Wróć do logowania</p>
				</Link>
			</CardFooter>
		</Card>
	)
}
