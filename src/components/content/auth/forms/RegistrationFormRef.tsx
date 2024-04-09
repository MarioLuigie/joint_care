'use client'
import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'
import { zodResolver } from '@hookform/resolvers/zod'
import { useState } from 'react'
import { useForm } from 'react-hook-form'

import InputRef from '@/components/shared/inputsRef/InputRef'
import InputPasswordRef from '@/components/shared/inputsRef/InputPasswordRef'
import InputCheckboxRef from '@/components/shared/inputsRef/InputCheckboxRef'
import WarningNotif from '@/components/shared/notifs/WarningNotif'
import RegisteredAccountWarning from '@/components/content/auth/notifs/RegisteredAccountWarning'
import { registrationSchema, RegistrationFormData } from '@/lib/utils/zod'
import { apiRegisterUser } from '@/lib/api/auth-api'
import { routes } from '@/lib/constants'
import Link from 'next/link'

function AcceptStatute() {
	return (
		<div className="flex items-center space-x-2">
			<p>Akceptuję</p>
			<Link href="#" className="underline text-sm font-medium text-[#030303]">
				Regulamin serwisu
			</Link>
		</div>
	)
}

export default function RegistrationFormRef() {
	const [isServerError, setIsServerError] = useState<boolean>(false)
	const router = useRouter()

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<RegistrationFormData>({
		resolver: zodResolver(registrationSchema),
	})

	const onSubmit = async (data: RegistrationFormData) => {
		console.log(data)

		try {
			const res = await apiRegisterUser(data)

			if (res.errors && res.errors.email) {
				setIsServerError(true)
			}

			if (res.success) {
				router.push(routes.REGISTER_SUCCESS)
			}
		} catch (err) {
			console.log('There was a problem with registration', err)
		}
	}

	return (
		<form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3">
			<WarningNotif isError={isServerError}>
				<RegisteredAccountWarning />
			</WarningNotif>
			<div className="flex flex-col gap-3">
				<InputRef
					{...register('email')}
					error={errors.email}
					label="Adres e-mail"
					placeholder="Wpisz e-mail"
					type="email"
				/>
				<InputPasswordRef
					{...register('password')}
					error={errors.password}
					label="Hasło"
					placeholder="Wpisz hasło"
				/>
				<InputPasswordRef
					{...register('password_confirmation')}
					error={errors.password_confirmation}
					label="Powtórzenie hasła"
					placeholder="Powtórz hasło"
				/>
			</div>
			<div className="pt-2">
				<InputCheckboxRef
					{...register('accept_statute')}
					error={errors.accept_statute}
					label={<AcceptStatute />}
					id="accept_statute"
				/>
			</div>
			<div className="flex flex-col pt-3">
				<Button className="w-full">Załóż konto</Button>
			</div>
		</form>
	)
}
