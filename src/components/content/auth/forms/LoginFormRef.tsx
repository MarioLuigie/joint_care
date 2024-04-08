'use client'
// modules
import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
// components
import { Button } from '@/components/ui/button'
import InputRef from '@/components/shared/inputsRef/InputRef'
// library
import { loginSchema } from '@/lib/utils/zod'
import { apiLoginUser } from '@/lib/api/auth-api'
import { routes } from '@/lib/constants'
import { LoginFormData } from '@/lib/types'
// import { setUserProfile, getUserProfile } from '@/lib/utils'
import { useAppContext } from '@/context'
import AlertNotif from '@/components/shared/notifs/AlertNotif'
import IncorrectDataAlert from '@/components/content/auth/notifs/IncorrectDataAlert'
import InputCheckbox from '@/components/shared/inputs/InputCheckBox'

export default function LoginFormRef() {
	const [isServerError, setIsServerError] = useState<boolean>(false)
	const [isRememberMe, setIsRememberMe] = useState<boolean>(false)
	const router = useRouter()
	const { setUser } = useAppContext()

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<LoginFormData>({
		resolver: zodResolver(loginSchema),
	})

	const handleCheck = () => (isChecked: boolean) => {
		setIsRememberMe(isChecked)
	}

	const onSubmit = async (data: any) => {
		try {
			const res = await apiLoginUser(data)

			if (res.errors) {
				setIsServerError(true)
			}

			if (res.success) {
				isRememberMe && localStorage.setItem('profile', JSON.stringify(res.data))
				setUser(res.data)
				router.push(routes.DASHBOARD)
				// setUserProfile(data)
			} else {
				console.log(res.errors)
			}
			console.log(res);
		} catch (err) {
			console.log('There is a problem with login', err)
		}
	}

	return (
		<form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3">
			<div className="flex flex-col gap-3">
				<AlertNotif isError={isServerError}>
					<IncorrectDataAlert />
				</AlertNotif>
				<InputRef
					{...register('email')}
					error={errors.email}
					label="Adres e-mail"
					placeholder="Wpisz e-mail"
					type="email"
				/>
				<InputRef
					{...register('password')}
					error={errors.password}
					label="Hasło"
					placeholder="Wpisz hasło"
					type="password"
				/>
			</div>
			<div className="pt-4">
				<InputCheckbox
					id="remember_me"
					name="remember_me"
					checked={isRememberMe}
					handleCheck={handleCheck}
					isError={false}
					errors={[]}
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
