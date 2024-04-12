'use client'
// modules
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { zodResolver } from '@hookform/resolvers/zod'
import Link from 'next/link'
// components
import { Button } from '@/components/ui/button'
import InputCheckboxRef from '@/components/shared/inputs/reference/InputCheckboxRef'
import InputPasswordRef from '@/components/shared/inputs/reference/InputPasswordRef'
import InputRef from '@/components/shared/inputs/reference/InputRef'
import PasswordReq from '@/components/shared/common/PasswordReq'
import WarningNotif from '@/components/shared/notifs/WarningNotif'
// lib
import { apiRegisterUser } from '@/lib/api/auth'
import { registrationSchema, RegistrationFormData } from '@/lib/utils/zod'
import { routes } from '@/lib/constants'

export default function RegistrationFormRef() {
	const [isServerError, setIsServerError] = useState<boolean>(false)
	const router = useRouter()

	// Form
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm<RegistrationFormData>({
		resolver: zodResolver(registrationSchema),
	})

	// Action on submit
	const onSubmit = async (data: RegistrationFormData) => {
		console.log(data)

		try {
			const res = await apiRegisterUser(data)

			if (res.errors && res.errors.email) {
				setIsServerError(true)
			}

			if (res.success) {
				router.push(routes.AUTH_REGISTER_SUCCESS)
			}
		} catch (err) {
			console.log('There was a problem with registration', err)
		}
	}

	// Accept Statute
	const AcceptStatute = () => (
		<div className="flex items-center space-x-2">
			<p>Akceptuję</p>
			<Link href="#" className="underline text-sm font-medium text-[#030303]">
				Regulamin serwisu
			</Link>
		</div>
	)

	const ExistingAccountWarning = () => (
		<>
			<p>Konto z tym adresem e-mail jest już zarejestrowane.</p>
			<div className="flex items-center gap-2 text-jc-text1">
				<Link href="/auth/login" className="jc-warning-link underline">
					Zaloguj się
				</Link>
				<p className="jc-warning-link">lub</p>
				<Link
					href="/auth/forgot-password"
					className="jc-warning-link underline"
				>
					Przypomnij hasło
				</Link>
			</div>
		</>
	)

	return (
		<form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3">
			<WarningNotif isError={isServerError}>
				<ExistingAccountWarning />
			</WarningNotif>
			<div className="flex flex-col gap-3 pb-3">
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
			<PasswordReq password={watch('password')} />
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
