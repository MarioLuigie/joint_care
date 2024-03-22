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
import { useRouter } from 'next/navigation'

import Input from '@/components/shared/Input'
import InputPassword from '@/components/shared/InputPassword'
import AlertNotif from '@/components/content/auth/partials/AlertNotif'
import CheckboxLabel from '@/components/shared/CheckboxLabel'
import { Label } from '@/components/ui/label'
import { LoginFormData } from '@/lib/types'
import { LoginValidators } from '@/lib/types'
import { loginUser } from '@/lib/api/auth-api'
import { validateLogin } from '@/lib/utils/validators'
import { errorMsg } from '@/lib/constants'
import { checkValidators } from '@/lib/utils'

export default function Login() {
	const initFormData: LoginFormData = {
		email: '',
		password: '',
	}

	const initValidators: LoginValidators = {
		email: [{ error: false, msg: errorMsg.EMPTY }],
		password: [{ error: false, msg: errorMsg.EMPTY }],
	}

	const router = useRouter()

	const [formData, setFormData] = useState<LoginFormData>(initFormData)
	const [validators, setValidators] = useState<LoginValidators>(initValidators)

	const [isServerError, setIsServerError] = useState<boolean>(false)
	const [isClientError, setIsClientError] = useState<boolean>(false)

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const updatedFormData = {
			...formData,
			[e.target.name]: e.target.value,
		}

		setValidators(validateLogin(updatedFormData))
		setFormData(updatedFormData)
		setIsServerError(false)
	}

	const handleSubmit = async () => {
		if (checkValidators(validators)) {
			const data = await loginUser(formData)

			console.log('Login:', data)

			if (data.errors) {
				setIsServerError(true)
			}

			if (data.success) {
				router.push('/dashboard')
			}
		} else {
			console.log('INVALID LOGINFORM')
			setIsClientError(true)
		}
	}

	return (
		<Card className="auth-card">
			<CardHeader>
				<CardTitle>Zaloguj się</CardTitle>
				<CardDescription>Chcę się zalogować</CardDescription>
			</CardHeader>
			<CardContent className="flex flex-col gap-3">
				<div className="flex flex-col gap-3 pb-5">
					<AlertNotif isError={isServerError}>
						<p>Niepoprawne dane do logowania!</p>
						<p>Uzupełnij ponownie</p>
					</AlertNotif>
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
				</div>
				<CheckboxLabel id="remember">
					<Label htmlFor="remember">Zapamiętaj mnie</Label>
				</CheckboxLabel>
			</CardContent>
			<CardFooter className="flex flex-col gap-2 pt-5">
				<Button className="w-full" onClick={handleSubmit}>
					Zaloguj
				</Button>
				<Link
					href="/auth/forgot-password"
					className="flex-center underline text-sm text-jc-text4"
				>
					<p>Zapomniałem hasło</p>
				</Link>
			</CardFooter>
		</Card>
	)
}
