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
import Alert from '@/components/content/auth/partials/AlertNotif'
import CheckboxLabel from '@/components/shared/CheckboxLabel'
import { Label } from '@/components/ui/label'
import { ILogin } from '@/lib/types'
import { loginUser } from "@/lib/api/auth-api"


export default function Login() {
	const initFormData: ILogin = {
		email: '',
		password: '',
	}

	const router = useRouter()
	const [ errors, setErrors ] = useState<boolean>(false)
	const [formData, setFormData] = useState<ILogin>(initFormData)

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		})
		setErrors(false)
		console.log(formData)
	}

	const handleSubmit = async () => {
		const data = await loginUser(formData)

		console.log("Login:", data)

		if(data.errors) {
			setErrors(true)
		}

		if(data.success) {
			router.push("/dashboard")
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
					{errors && (
						<Alert>
							<p>Niepoprawne dane do logowania!</p>
							<p>Uzupełnij ponownie</p>
						</Alert>
						)}
					<Input
						value={formData.email}
						type="email"
						name="email"
						placeholder="Wpisz"
						label="Adres e-mail"
						handleChange={handleChange}
					/>
					<InputPassword
						value={formData.password}
						name="password"
						placeholder="Hasło"
						label="Hasło"
						handleChange={handleChange}
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
