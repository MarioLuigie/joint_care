'use client'
// modules
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { zodResolver } from '@hookform/resolvers/zod'
import Link from 'next/link'
// components
import { Button } from '@/components/ui/button'
import AlertNotif from '@/components/shared/notifs/AlertNotif'
import InputPasswordRef from '@/components/shared/inputs/reference/InputPasswordRef'
import InputRef from '@/components/shared/inputs/reference/InputRef'
// lib
import { apiLoginUser } from '@/lib/api/auth-api'
import { loginSchema, LoginFormData } from '@/lib/utils/zod'
import { routes } from '@/lib/constants'
import { useAppContext } from '@/lib/context'
import InputCheckboxRef from '@/components/shared/inputs/reference/InputCheckboxRef'

export default function LoginFormRef() {
	const { setUser } = useAppContext()
	const [isServerError, setIsServerError] = useState<boolean>(false)
	const router = useRouter()

	// Form
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm<LoginFormData>({
		resolver: zodResolver(loginSchema),
	})

	// Action on submit
	const onSubmit = async (data: LoginFormData) => {
		console.log(data)

		try {
			const res = await apiLoginUser(data)

			if (res.errors) {
				setIsServerError(true)
			}

			if (res.success) {
				data.remember_me &&
					localStorage.setItem('profile', JSON.stringify(res.data))
				setUser(res.data)
				router.push(routes.PROFILE_MY_PROFILE)
			} else {
				console.log(res.errors)
			}
			console.log(res)
		} catch (err) {
			console.log('There is a problem with login', err)
		}
	}

	return (
		<form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3">
			<AlertNotif isError={isServerError}>
				<p>Niepoprawne dane do logowania!</p>
				<p>Uzupełnij ponownie</p>
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
			<div className="py-2">
				<InputCheckboxRef
					{...register('remember_me')}
					error={errors.remember_me}
					label="Zapamiętaj mnie"
					id="accept_statute"
				/>
			</div>
			<div className="flex flex-col gap-2">
				<Button className="w-full">Zaloguj</Button>
				<Link
					href={routes.AUTH_FORGOT_PASSWORD}
					className="flex-center underline text-sm  text-jc-text4"
				>
					<p>Zapomniałem hasło</p>
				</Link>
			</div>
		</form>
	)
}
