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
import { useRouter } from 'next/navigation'

import Input from '@/components/shared/inputs/Input'
import InputPassword from '@/components/shared/inputs/InputPassword'
import PasswordRequierds from './partials/PasswordRequierds'
import WarningNotif from '../../shared/notifs/WarningNotif'
import InputCheckbox from '@/components/shared/inputs/InputCheckBox'
import { RegistrationFormData } from '@/lib/types'
import { RegistrationFormErrors } from '@/lib/types'
import { registerUser } from '@/lib/api/auth-api'
import { validateRegistration } from '@/lib/utils/validators'
import { errorMsg } from '@/lib/constants'
import { checkErrors } from '@/lib/utils'
import RegisteredAccountWarning from '@/components/content/auth/partials/RegisteredAccountWarning'
import AcceptStatute from './partials/AcceptStatute'

export default function Registration() {
	const initFormData: RegistrationFormData = {
		email: '',
		password: '',
		password_confirmation: '',
	}

	const initFormErrors: RegistrationFormErrors = {
		email: [
			errorMsg.EMPTY
		],
		password: [
			errorMsg.PASSWORD_LETTER_SIZE,
			errorMsg.PASSWORD_DIGIT,
			errorMsg.PASSWORD_SPECIAL_CHAR,
			errorMsg.PASSWORD_LENGTH
			,
		],
		password_confirmation: [
			errorMsg.EMPTY
		],
	}

	const router = useRouter()

	const [formData, setFormData] = useState<RegistrationFormData>(initFormData)
	const [formErrors, setFormErrors] =
		useState<RegistrationFormErrors>(initFormErrors)

	const [isClientError, setIsClientError] = useState<boolean>(false)
	const [isServerError, setIsServerError] = useState<boolean>(false)

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const updatedFormData = {
			...formData,
			[e.target.name]: e.target.value,
		}
		setFormErrors(validateRegistration(updatedFormData))
		setFormData(updatedFormData)
	}

	const handleSubmit = async () => {
	
		if (checkErrors(formErrors)) {
			const data = await registerUser(formData)

			if (data.errors && data.errors.email) {
				setIsServerError(true)
			} else {
				setIsServerError(false)
			}

			if (data.success) {
				router.push('/auth/register-success')
			}
		} else {
			console.log('INVALID REGISTER FORM')
			setIsClientError(true)
		}
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
					<WarningNotif isError={isServerError}>
						<RegisteredAccountWarning />
					</WarningNotif>
					<Input
						handleChange={handleChange}
						label="Adres e-mail"
						name="email"
						placeholder="Wpisz e-mail"
						type="email"
						isError={isClientError}
						errors={formErrors.email}
						value={formData.email}
					/>
					<InputPassword
						handleChange={handleChange}
						label="Hasło"
						name="password"
						placeholder="Wpisz hasło"
						isError={isClientError}
						errors={formErrors.password}
						value={formData.password}
					/>
					<InputPassword
						handleChange={handleChange}
						label="Powtórzenie hasła"
						name="password_confirmation"
						placeholder="Powtórz hasło"
						isError={isClientError}
						errors={formErrors.password_confirmation}
						value={formData.password_confirmation}
					/>
					<PasswordRequierds errors={formErrors.password} />
					<div className="flex">
						<InputCheckbox id="statute">
							<AcceptStatute />
						</InputCheckbox>
					</div>
				</div>
			</CardContent>
			<CardFooter className="flex flex-col pt-5">
				<Button onClick={handleSubmit} className="w-full">
					Załóż konto
				</Button>
			</CardFooter>
		</Card>
	)
}
