'use client'
// modules
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import Link from 'next/link'
// components
import { Form } from '@/components/ui/form'
import { Button } from '@/components/ui/button'
import AlertNotif from '@/components/shared/notifs/AlertNotif'
import InputShadcn from '@/components/shared/inputs/shadcn/InputShadcn'

import Group from '@/components/shared/containers/Group'
// lib
// import { apiForgotPassword } from '@/lib/api/auth-api'
import { forgotPasswordSchema, ForgotPasswordFormData } from '@/lib/zod/auth'
import { routes } from '@/lib/constants'

export default function ForgotPasswordForm() {
	const [isServerError, setIsServerError] = useState<boolean>(false)

	// Form
	const form = useForm<ForgotPasswordFormData>({
		resolver: zodResolver(forgotPasswordSchema),
		defaultValues: {
			email: '',
		},
	})

	// Action on submit
	const onSubmit = async (data: ForgotPasswordFormData) => {
		console.log(data)
		setIsServerError(true)
		// TODO: implement apiForgotPassword

		// try {
		// 	const res = await apiForgotPassword(data)
		// } catch (err) {
		// 	console.log(err)
		// }
	}

	const NotExistingAccountWarning = () => (
		<>
			<p>Konto o podanym adresie e-mail nie istnieje.</p>
			<div className="flex gap-1">
				<p>Sprawdź poprawność adresu lub</p>
				<Link href={routes.AUTH_REGISTER}>
					<p className="jc-warning-link underline">utwórz nowe konto</p>
				</Link>
			</div>
		</>
	)

	return (
		<Form {...form}>
			<form
				onSubmit={form.handleSubmit(onSubmit)}
				className="flex flex-col gap-6"
			>
				<AlertNotif isError={isServerError}>
					<NotExistingAccountWarning />
				</AlertNotif>
				<InputShadcn
					control={form.control}
					name="email"
					type="email"
					placeholder="Wpisz e-mail"
					label="Adres e-mail"
				/>
				<Group gap="2">
					<Button className="w-full">Wyślij</Button>
					<Link
						href={routes.AUTH_LOGIN}
						className="flex-center underline text-sm text-jc-text4"
					>
						<p className="p-1">Wróć do logowania</p>
					</Link>
				</Group>
			</form>
		</Form>
	)
}
