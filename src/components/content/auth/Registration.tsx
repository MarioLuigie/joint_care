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
import { RegistrationFormData, Validator } from '@/lib/types'
import { RegisterValidators } from '@/lib/types'
import { registerUser } from '@/lib/api/auth-api'
import { validateRegistration } from '@/lib/utils/validators'
import { errorMsg } from '@/lib/constants'
import { checkValidators } from '@/lib/utils'

export default function Registration() {
	const initFormData: RegistrationFormData = {
		email: '',
		password: '',
		password_confirmation: '',
	}

	const initValidators: RegisterValidators = {
		email: [{ error: false, msg: errorMsg.EMPTY }],
		password: [
			{ error: false, msg: errorMsg.PASSWORD_LETTER_SIZE },
			{ error: false, msg: errorMsg.PASSWORD_DIGIT },
			{ error: false, msg: errorMsg.PASSWORD_SPECIAL_CHAR },
			{ error: false, msg: errorMsg.PASSWORD_LENGTH },
		],
		password_confirmation: [{ error: false, msg: errorMsg.EMPTY }],
	}

	const router = useRouter()

	const [formData, setFormData] = useState<RegistrationFormData>(initFormData)
	const [validators, setValidators] =
		useState<RegisterValidators>(initValidators)

	const [isClientError, setIsClientError] = useState<boolean>(false)
	const [isServerError, setIsServerError] = useState<boolean>(false)

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const updatedFormData = {
			...formData,
			[e.target.name]: e.target.value,
		}
		setValidators(validateRegistration(updatedFormData))
		setFormData(updatedFormData)
	}

	const handleSubmit = async () => {
		if (checkValidators(validators)) {
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
						<p>Konto z tym adresem e-mail jest już zarejestrowane.</p>
						<div className="flex items-center gap-2 text-jc-text1">
							<Link href="/auth/login" className="jc-warning-link underline">
								Zaloguj się
							</Link>
							<p className="jc-warning-link">lub</p>
							<Link
								href="/auth/forgot-password"
								className="jc-warning-link underline"
							>
								Przypomnij hasło
							</Link>
						</div>
					</WarningNotif>
					<Input
						handleChange={handleChange}
						isError={isClientError}
						label="Adres e-mail"
						name="email"
						placeholder="Wpisz e-mail"
						type="email"
						validators={validators.email}
						value={formData.email}
					/>
					<InputPassword
						handleChange={handleChange}
						isError={isClientError}
						label="Hasło"
						name="password"
						placeholder="Wpisz hasło"
						validators={validators.password}
						value={formData.password}
					/>
					<InputPassword
						handleChange={handleChange}
						isError={isClientError}
						label="Powtórzenie hasła"
						name="password_confirmation"
						placeholder="Powtórz hasło"
						validators={validators.password_confirmation}
						value={formData.password_confirmation}
					/>
					<PasswordReqs validators={validators.password} />
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
				<Button onClick={handleSubmit} className="w-full">
					Załóż konto
				</Button>
			</CardFooter>
		</Card>
	)
}
