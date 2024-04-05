'use client'
// modules
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRef, useState } from 'react'
import { useForm } from 'react-hook-form'
// components
import { Button } from '@/components/ui/button'
import InputRef from '@/components/shared/inputsRef/InputRef'
import InputPasswordRef from '@/components/shared/inputsRef/InputPasswordRef'
import IncorrectDataAlert from '@/components/content/auth/notifs/IncorrectDataAlert'
import AlertNotif from '@/components/shared/notifs/AlertNotif'
// lib
import { loginSchema } from '@/lib/utils/zod'
import { apiLoginUser } from '@/lib/api/auth-api'
import { setUserProfile } from '@/lib/utils'
import { routes } from '@/lib/constants'

export default function LoginFormRef() {
	const [isServerError, setIsServerError] = useState<boolean>(false)
	const router = useRouter()

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: zodResolver(loginSchema),
	})

	const onSubmit = async (data: any) => {
		const res = await apiLoginUser(data)
		if (res.errors) {
			setIsServerError(true)
		}

		if (res.success) {
			setUserProfile(res)
			const profile = localStorage.getItem('profile')

			if (profile !== null) {
				router.push(routes.DASHBOARD)
			}
		}
	}

	return (
		<form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3">
			<AlertNotif isError={isServerError}>
				<IncorrectDataAlert />
			</AlertNotif>
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
					placeholder="Wpisz hasło"
					label="Hasło"
				/>
			</div>
			<div className="flex flex-col gap-2 pt-4">
				<Button className="w-full">Zaloguj</Button>
				<Link
					href={routes.FORGOT_PASSWORD}
					className="flex-center underline text-sm text-jc-text4"
				>
					<p>Zapomniałem hasło</p>
				</Link>
			</div>
		</form>
	)
}
