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
import { ILoginForm } from '@/lib/types'
import { ILoginValidationErrors } from '@/lib/types'
import { loginUser } from "@/lib/api/auth-api"
import { validateLogin } from '@/lib/utils/validation'
import { errorMsg } from '@/lib/constants'


export default function Login() {
	const initFormData: ILoginForm = {
		email: '',
		password: '',
	}

	const initLoginValidationErrors: ILoginValidationErrors = {
		email: false,
		password_length: false
	}

	const router = useRouter()
	const [ isServerError, setIsServerError ] = useState<boolean>(false)
	const [ isClientError, setIsClientError ] = useState<boolean>(false)
	const [ loginFormData, setLoginFormData ] = useState<ILoginForm>(initFormData)
	const [ loginValidationErrors, setLoginValidationErrors ] = useState<ILoginValidationErrors>(initLoginValidationErrors);

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const updatedFormData = {
			...loginFormData,
			[e.target.name]: e.target.value,
		}

		console.log("***", updatedFormData);

		setLoginValidationErrors(validateLogin(updatedFormData))
		setLoginFormData(updatedFormData)
		setIsServerError(false)
		console.log(loginFormData)
		console.log(loginValidationErrors);
	}

	const handleSubmit = async () => {
		console.log(loginValidationErrors);

		if(Object.values(loginValidationErrors).every(value => value === true)) {
			const data = await loginUser(loginFormData)

			console.log("Login:", data)
	
			if(data.errors) {
				setIsServerError(true)
			}
	
			if(data.success) {
				router.push("/dashboard")
			}
		} else {
			console.log("INVALID LOGINFORM");
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
						value={loginFormData.email}
						type="email"
						name="email"
						placeholder="Wpisz"
						label="Adres e-mail"
						handleChange={handleChange}
						isClientError={isClientError} 
						specificErrors={[
							{error: loginValidationErrors.email, msg: errorMsg.EMAIL} 
						]} 
					/>
					<InputPassword
						value={loginFormData.password}
						name="password"
						placeholder="Hasło"
						label="Hasło"
						handleChange={handleChange}
						isClientError={isClientError} 
						specificErrors={[
							{error: loginValidationErrors.password_length, msg: errorMsg.PASSWORD} 
						]} 
					/>
				</div>
				<CheckboxLabel id="remember">
					<Label htmlFor="remember">Zapamiętaj mnie</Label>
				</CheckboxLabel>
			</CardContent>
			<CardFooter className="flex flex-col gap-2 pt-5">
				<Button className="w-full" onClick={handleSubmit}>Zaloguj</Button>
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
