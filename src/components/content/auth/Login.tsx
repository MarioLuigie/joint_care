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

import Input from '@/components/shared/inputs/Input'
import InputPassword from '@/components/shared/inputs/InputPassword'
import AlertNotif from '@/components/shared/notifs/AlertNotif'
import InputCheckbox from '@/components/shared/inputs/InputCheckBox'
import { Label } from '@/components/ui/label'
import { LoginFormData } from '@/lib/types'
import { LoginFormErrors as LoginFormErrors } from '@/lib/types'
import { loginUser } from '@/lib/api/auth-api'
import { validateLogin } from '@/lib/utils/validators'
import { errorMsg } from '@/lib/constants'
import { checkErrors } from '@/lib/utils'
import IncorrectDataAlert from './partials/IncorrectDataAlert'

export default function Login() {
	const initFormData: LoginFormData = {
		email: '',
		password: '',
	}

	const initFormErrors: LoginFormErrors = {
		email: [errorMsg.EMPTY],
		password: [errorMsg.EMPTY],
	}

	const router = useRouter()

	const [formData, setFormData] = useState<LoginFormData>(initFormData)
	const [formErrors, setFormErrors] = useState<LoginFormErrors>(initFormErrors)

	const [isServerError, setIsServerError] = useState<boolean>(false)
	const [isClientError, setIsClientError] = useState<boolean>(false)

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const updatedFormData = {
			...formData,
			[e.target.name]: e.target.value,
		}

		setFormErrors(validateLogin(updatedFormData))
		setFormData(updatedFormData)
		setIsServerError(false)
	}

	const handleSubmit = async () => {
		if (checkErrors(formErrors)) {
			const data = await loginUser(formData)

			console.log('Login:', data)

			if (data.errors) {
				setIsServerError(true)
				setIsClientError(false)
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
						<IncorrectDataAlert />
					</AlertNotif>
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
				</div>
				<InputCheckbox id="remember">
					<Label htmlFor="remember">Zapamiętaj mnie</Label>
				</InputCheckbox>
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
