'use client'
// modules
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { zodResolver } from '@hookform/resolvers/zod'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
// components
import InputShadcn from '@/components/shared/inputsRef/archive/InputShadcn'
import IncorrectDataAlert from '@/components/content/auth/notifs/IncorrectDataAlert'
import AlertNotif from '@/components/shared/notifs/AlertNotif'
import { Button } from '@/components/ui/button'
import { Form } from '@/components/ui/form'
// lib
import { loginSchema } from '@/lib/utils/zod'
import { apiLoginUser } from '@/lib/api/auth-api'
import { routes } from '@/lib/constants'

export default function LoginFormRef() {
	const [isServerError, setIsServerError] = useState<boolean>(false)
	const router = useRouter()

	// FORM
	const form = useForm<z.infer<typeof loginSchema>>({
		resolver: zodResolver(loginSchema),
		defaultValues: {
			email: '',
			password: '',
		},
	})

	// SUBMIT FORM
	const onSubmit = async (values: z.infer<typeof loginSchema>) => {
		console.log(values)
		const data = await apiLoginUser(values)
		if (data.errors) {
			setIsServerError(true)
		}
		if (data.success) {
			console.log("User logged in");
		}
	}

	return (
		<Form {...form}>
			<AlertNotif isError={isServerError}>
				<IncorrectDataAlert />
			</AlertNotif>
			<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
				<InputShadcn
					name="email"
					control={form.control}
					placeholder="Wpisz e-mail"
					label="Adres e-mail"
				/>
				<InputShadcn
					name="password"
					control={form.control}
					placeholder="Wpisz hasło"
					label="Hasło"
				/>
				<Button className="w-full">Zaloguj</Button>
			</form>
			<Link
				href={routes.FORGOT_PASSWORD}
				className="flex-center underline text-sm text-jc-text4 mt-2"
			>
				<p>Zapomniałem hasło</p>
			</Link>
		</Form>
	)
}
