'use client'
// modules
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { zodResolver } from '@hookform/resolvers/zod'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
// components
import InputShadcn from '@/components/shared/inputs/shadcn/InputShadcn'
import InputPasswordShadcn from '@/components/shared/inputs/shadcn/InputPasswordShadcn'
import InputCheckboxShadcn from '@/components/shared/inputs/shadcn/InputCheckboxShadcn'
import AlertNotif from '@/components/shared/notifs/AlertNotif'
import { Button } from '@/components/ui/button'
import { Form } from '@/components/ui/form'
// lib
import { loginSchema, LoginFormData } from '@/lib/utils/zod'
import { apiLoginUser } from '@/lib/api/auth-api'
import { routes } from '@/lib/constants'

export default function LoginFormRef() {
	const [isServerError, setIsServerError] = useState<boolean>(false)
	const router = useRouter()

	// Form
	const form = useForm<LoginFormData>({
		resolver: zodResolver(loginSchema),
		defaultValues: {
			email: '',
			password: '',
			remember_me: false,
		},
	})

	// Action on submit
	const onSubmit = async (values: LoginFormData) => {
		console.log(values)
		const data = await apiLoginUser(values)
		if (data.errors) {
			setIsServerError(true)
		}
		if (data.success) {
			console.log('User logged in')
		}
	}

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
				<AlertNotif isError={isServerError}>
					<p>Niepoprawne dane do logowania!</p>
					<p>Uzupełnij ponownie</p>
				</AlertNotif>
				<InputShadcn
					control={form.control}
					name="email"
					type="email"
					placeholder="Wpisz e-mail"
					label="Adres e-mail"
				/>
				<InputPasswordShadcn
					control={form.control}
					name="password"
					placeholder="Wpisz hasło"
					label="Hasło"
				/>
				<InputCheckboxShadcn
					control={form.control}
					label="Zapamiętaj mnie"
					name="remember_me"
				/>
				<Button className="w-full">Zaloguj</Button>
			</form>
			<Link
				href={routes.AUTH_FORGOT_PASSWORD}
				className="flex-center underline text-sm text-jc-text4 mt-2"
			>
				<p className="p-1">Zapomniałem hasło</p>
			</Link>
		</Form>
	)
}
