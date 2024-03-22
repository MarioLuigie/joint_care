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
import Link from 'next/link'

import Input from '@/components/shared/Input'
import InputPassword from '@/components/shared/InputPassword'
import PasswordReqs from './partials/PasswordReqs'
import WarningNotif from './partials/WarningNotif'
import CheckboxLabel from '@/components/shared/CheckboxLabel'
import { Label } from '@/components/ui/label'
import { RegistrationFormData } from '@/lib/types'
import { RegisterValidationErrors } from '@/lib/types'
import { registerUser } from "@/lib/api/auth-api"
import { validateRegistration } from '@/lib/utils/validation'
import { errorMsg } from '@/lib/constants'

export default function Registration() {

	const initRegistrationFormData: RegistrationFormData = {
		email: '',
		password: '',
		password_confirmation: ''
	}

	const initRegisterValidationErrors: RegisterValidationErrors = {
		email: [
			{error: false, msg: errorMsg.EMAIL}
		],
		password: [
			{error: false, msg: errorMsg.PASSWORD_LETTER_SIZE},
			{error: false, msg: errorMsg.PASSWORD_DIGIT},
			{error: false, msg: errorMsg.PASSWORD_SPECIAL_CHAR},
			{error: false, msg: errorMsg.PASSWORD_LENGTH}
		],
		password_confirmation: [
			{error: false, msg: errorMsg.PASSWORD_CONFIRMATION}
		]
	}

	const router = useRouter()
	const [ isClientError, setIsClientError ] = useState<boolean>(false)
	const [ isServerError, setIsServerError ] = useState<boolean>(false)
	const [ registrationFormData, setRegistrationFormData ] = useState<RegistrationFormData>(initRegistrationFormData)
	const [ registerValidationErrors, setRegisterValidationErrors ] = useState<RegisterValidationErrors>(initRegisterValidationErrors);

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const updatedFormData = {
			...registrationFormData,
			[e.target.name]: e.target.value,
		}
		setRegisterValidationErrors(validateRegistration(updatedFormData))
		setRegistrationFormData(updatedFormData)
	}

	const handleSubmit = async () => {
		
		if(Object.values(registerValidationErrors).every(value => value === true)) {
			const data = await registerUser(registrationFormData)

			if(data.errors && data.errors.email) {
				setIsServerError(true)
			} else {
				setIsServerError(false)
			}

			if(data.success) {
				router.push("/auth/register-success")
			}

		} else {
			console.log("INVALID REGISTERFORM");
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
						<p>Konto z tym adresem e-mail jest już zarejestrowane.</p>
						<div className='flex items-center gap-2 text-jc-text1'>
							<Link href="/auth/login" className="jc-warning-link underline">
								Zaloguj się
							</Link>
							<p className="jc-warning-link">lub</p>
							<Link href="/auth/forgot-password" className="jc-warning-link underline">
								Przypomnij hasło
							</Link>
						</div>
					</WarningNotif>
					<Input
						value={registrationFormData.email}
						validators={registerValidationErrors.email}
						type="email"
						name="email"
						placeholder="Wpisz"
						label="Adres e-mail"
						handleChange={handleChange}
						isClientError={isClientError}  
					/>
					<InputPassword
						value={registrationFormData.password}
						validators={registerValidationErrors.password}
						name="password"
						placeholder="Wpisz"
						label="Hasło"
						handleChange={handleChange}
						isClientError={isClientError} 
					/>
					<InputPassword
						value={registrationFormData.password_confirmation}
						validators={registerValidationErrors.password_confirmation}
						name="password_confirmation"
						placeholder="Wpisz"
						label="Powtórz nowe hasło"
						handleChange={handleChange}
						isClientError={isClientError} 
					/>
					<PasswordReqs validators={registerValidationErrors.password}/>
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
				<Button onClick={handleSubmit} className="w-full">Załóż konto</Button>
			</CardFooter>
		</Card>
	)
}
