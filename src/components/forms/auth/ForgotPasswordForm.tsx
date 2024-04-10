'use client'
// modules
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import Link from 'next/link'
// components
import { Button } from '@/components/ui/button'
import AlertNotif from '@/components/shared/notifs/AlertNotif'
import InputRef from '@/components/shared/inputs/reference/InputRef'
// lib
// import { apiForgotPassword } from '@/lib/api/auth-api'
import { forgotPasswordSchema, ForgotPasswordFormData } from '@/lib/utils/zod'
import { routes } from '@/lib/constants'

export default function ForgotPasswordForm() {
	const [isServerError, setIsServerError] = useState<boolean>(false)

	// Form
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<ForgotPasswordFormData>({
		resolver: zodResolver(forgotPasswordSchema),
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

	return (
		<form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3">
			<AlertNotif isError={isServerError}>
				<p>Konto o podanym adresie e-mail nie istnieje.</p>
				<div className="flex gap-1">
					<p>Sprawdź poprawność adresu lub</p>
					<Link href={routes.AUTH_REGISTER}>
						<p className="jc-warning-link underline">utwórz nowe konto</p>
					</Link>
				</div>
			</AlertNotif>
			<InputRef
				{...register('email')}
				error={errors.email}
				label="Adres e-mail"
				placeholder="Wpisz e-mail"
				type="email"
			/>
			<Button className="w-full mt-2">Wyślij</Button>
			<Link
				href={routes.AUTH_LOGIN}
				className="flex-center underline text-sm text-jc-text4"
			>
				<p>Wróć do logowania</p>
			</Link>
		</form>
	)
}
