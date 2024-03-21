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
import { useState, useEffect } from 'react'
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
		password_special_characters: false,
		password_digit: false
	}

	const router = useRouter()
	const [ serverError, setServerError ] = useState<boolean>(false)
	const [ registrationFormData, setRegistrationFormData ] = useState<IRegistrationForm>(initRegistrationFormData)
	const [ validationErrors, setValidationErrors ] = useState<IValidationErrors>(initValidationErrors);

	useEffect(() => {
		setValidationErrors(validate(registrationFormData))
	}, [registrationFormData])

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setRegistrationFormData({
			...registrationFormData,
			[e.target.name]: e.target.value,
		})
	}

	const handleSubmit = async () => {
		const data = await registerUser(registrationFormData)

		if(data.errors && data.errors.email) {
			setServerError(true)
		} else {
			setServerError(false)
		}

		if(data.success) {
			setRegistrationFormData(initRegistrationFormData)
			router.push("/auth/register-success")
		}

		console.log(data)
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
					{serverError && (
						<Warning>
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
					)}
					<Input
						value={registrationFormData.email}
						type="email"
						name="email"
						placeholder="Wpisz"
						label="Adres e-mail"
						handleChange={handleChange}
					/>
					<InputPassword
						value={registrationFormData.password}
						type="password"
						name="password"
						placeholder="Wpisz"
						label="Hasło"
						handleChange={handleChange}
					/>
					<InputPassword
						value={registrationFormData.password_confirmation}
						type="password"
						name="password_confirmation"
						placeholder="Wpisz"
						label="Powtórz nowe hasło"
						handleChange={handleChange}
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
