'use client'
// modules
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { useState } from 'react'
// components
import { Button } from '@/components/ui/button'
import AccountNotExistAlert from '@/components/content/auth/notifs/AccountNotExistAlert'
import AlertNotif from '@/components/shared/notifs/AlertNotif'
import InputRef from '@/components/shared/inputsRef/InputRef'
// lib
// import { apiForgotPassword } from '@/lib/api/auth-api'
import { forgotPasswordSchema, ForgotPasswordFormData } from '@/lib/utils/zod'
import { routes } from '@/lib/constants'


export default function ForgotPasswordFormRef() {
	const router = useRouter()
  const [isServerError, setIsServerError] = useState<boolean>(false)

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<ForgotPasswordFormData>({
		resolver: zodResolver(forgotPasswordSchema),
	})

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
				<AccountNotExistAlert />
			</AlertNotif>
			<InputRef
				{...register('email')}
				error={errors.email}
				label="Adres e-mail"
				placeholder="Wpisz e-mail"
				type="email"
			/>
			<Button className="w-full mt-2">
				Wyślij
			</Button>
			<Link
				href={routes.LOGIN}
				className="flex-center underline text-sm text-jc-text4"
			>
				<p>Wróć do logowania</p>
			</Link>
		</form>
	)
}
