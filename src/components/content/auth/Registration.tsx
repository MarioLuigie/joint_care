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
import Warning from './partials/WarningNotif'
import CheckboxLabel from '@/components/shared/CheckboxLabel'
import { Label } from '@/components/ui/label'
import { IRegistrationForm } from '@/lib/types'
import { IValidationErrors } from '@/lib/types'
import { registerUser } from "@/lib/api/auth-api"
import { validate } from '@/lib/utils/validation'
import { errorMsg } from '@/lib/constants'

import { formatErrorMsg } from '@/lib/utils'

export default function Registration() {

	const initRegistrationFormData: IRegistrationForm = {
		email: '',
		password: '',
		password_confirmation: ''
	}

	const initValidationErrors: IValidationErrors = {
		email: false,
		password_confirmation: false,
		password_length: false,
		password_letter_size: false,
		password_special_chars: false,
		password_digit: false
	}

	const router = useRouter()
	const [ isClientError, setIsClientError ] = useState<boolean>(false)
	const [ isServerError, setIsServerError ] = useState<boolean>(false)
	const [ registrationFormData, setRegistrationFormData ] = useState<IRegistrationForm>(initRegistrationFormData)
	const [ validationErrors, setValidationErrors ] = useState<IValidationErrors>(initValidationErrors);

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const updatedFormData = {
			...registrationFormData,
			[e.target.name]: e.target.value,
		}
		setValidationErrors(validate(updatedFormData))
		setRegistrationFormData(updatedFormData)
	}

	const handleSubmit = async () => {
		if(Object.values(validationErrors).every(value => value === true)) {
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
			console.log("INVALID FORM");
			setIsClientError (true)
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
					<Warning isError={isServerError}>
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
					</Warning>
					<Input
						value={registrationFormData.email}
						type="email"
						name="email"
						placeholder="Wpisz"
						label="Adres e-mail"
						handleChange={handleChange}
						isClientError={isClientError} 
						specificErrors={[
							{error: validationErrors.email, msg: errorMsg.EMAIL} 
						]} 
					/>
					<InputPassword
						value={registrationFormData.password}
						name="password"
						placeholder="Wpisz"
						label="Hasło"
						handleChange={handleChange}
						isClientError={isClientError} 
						specificErrors={[
							{error: validationErrors.password_digit, msg: formatErrorMsg(errorMsg.PASSWORD_DIGIT)},
							{error: validationErrors.password_length, msg: formatErrorMsg(errorMsg.PASSWORD_LENGTH)},
							{error: validationErrors.password_special_chars, msg: formatErrorMsg(errorMsg.PASSWORD_SPECIAL_CHARS)},
							{error: validationErrors.password_letter_size, msg: formatErrorMsg(errorMsg.PASSWORD_LETTER_SIZE)} 
						]} 
					/>
					<InputPassword
						value={registrationFormData.password_confirmation}
						name="password_confirmation"
						placeholder="Wpisz"
						label="Powtórz nowe hasło"
						handleChange={handleChange}
						isClientError={isClientError} 
						specificErrors={[
							{error: validationErrors.password_confirmation, msg: errorMsg.PASSWORD_CONFIRMATION} 
						]} 
					/>
					<PasswordReqs validationErrors={validationErrors}/>
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
