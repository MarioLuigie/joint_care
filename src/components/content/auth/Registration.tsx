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
import InputCheckbox from '@/components/shared/inputs/InputCheckBox'
import { RegistrationFormData } from '@/lib/types'
import { RegistrationFormErrors } from '@/lib/types'
import { registerUser } from '@/lib/api/auth-api'
import { validateRegistration } from '@/lib/utils/validators'
import { errorMsg } from '@/lib/constants'
import { checkErrors } from '@/lib/utils'
import RegisteredAccountWarning from '@/components/content/auth/partials/notifs/RegisteredAccountWarning'
import AcceptStatute from './partials/AcceptStatute'
import WarningNotif from '@/components/shared/notifs/WarningNotif'
import { routes } from '@/lib/constants'

export default function Registration() {
	const initFormData: RegistrationFormData = {
		email: '',
		password: '',
		password_confirmation: '',
		accept_statute: false
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
		accept_statute: [
			errorMsg.ACCEPT_STATUTE
		]
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

	const handleCheck = (name: string) => (isChecked: boolean) => {
		const updatedFormData = {
			...formData,
			[name]: isChecked
		}
		setFormData(updatedFormData)
		setFormErrors(validateRegistration(updatedFormData))
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
				router.push(routes.REGISTER_SUCCESS)
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
					<WarningNotif 
						isError={isServerError}
						content={<RegisteredAccountWarning />}	
					/>
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
					<InputCheckbox 
						id="accept_statute" 
						name='accept_statute' 
						checked={formData.accept_statute}
						handleCheck={handleCheck} 
						isError={isClientError} 
						errors={formErrors.accept_statute}
						label={<AcceptStatute />}
					/>
			</CardContent>
			<CardFooter className="flex flex-col pt-5">
				<Button onClick={handleSubmit} className="w-full">
					Załóż konto
				</Button>
			</CardFooter>
		</Card>
	)
}
