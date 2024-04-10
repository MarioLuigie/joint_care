'use client'
// modules
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { zodResolver } from '@hookform/resolvers/zod'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
// components
import { Button } from '@/components/ui/button'
import InputRef from '@/components/shared/inputsRef/InputRef'
import InputPasswordRef from '@/components/shared/inputsRef/InputPasswordRef'
import InputCheckbox from '@/components/shared/inputs/InputCheckbox'
import IncorrectDataAlert from '@/components/content/auth/notifs/IncorrectDataAlert'
import AlertNotif from '@/components/shared/notifs/AlertNotif'
// lib
import { loginSchema } from '@/lib/utils/zod'
import { apiLoginUser } from '@/lib/api/auth-api'
import { routes } from '@/lib/constants'
import { useAppContext } from '@/context'

export default function LoginFormRef() {
	const [isServerError, setIsServerError] = useState<boolean>(false)
	const [isRememberMe, setIsRememberMe] = useState<boolean>(false)
	const router = useRouter()
	const { setUser } = useAppContext()

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<z.infer<typeof loginSchema>>({
		resolver: zodResolver(loginSchema),
	})

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setIsRememberMe(event.target.checked)
	}

	const onSubmit = async (data: z.infer<typeof loginSchema>) => {
		try {
			const res = await apiLoginUser(data)

			if (res.errors) {
				setIsServerError(true)
			}

			if (res.success) {
				isRememberMe &&
					localStorage.setItem('profile', JSON.stringify(res.data))
				setUser(res.data)
				router.push(routes.PROFILE)
				// router.push(routes.DASHBOARD)
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
			<div className="pt-2">
				<InputCheckbox
					id="remember_me"
					name="remember_me"
					checked={isRememberMe}
					handleChange={handleChange}
					label="Zapamiętaj mnie"
				/>
			</div>
			<div className="flex flex-col gap-2">
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
