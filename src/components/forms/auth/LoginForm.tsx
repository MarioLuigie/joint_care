'use client'
// modules
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { zodResolver } from '@hookform/resolvers/zod'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
// components
import Group from '@/components/shared/containers/Group'
import InputShadcn from '@/components/shared/inputs/shadcn/InputShadcn'
import InputPasswordShadcn from '@/components/shared/inputs/shadcn/InputPasswordShadcn'
import InputCheckboxShadcn from '@/components/shared/inputs/shadcn/InputCheckboxShadcn'
import AlertNotif from '@/components/shared/notifs/AlertNotif'
import { Button } from '@/components/ui/button'
import { Form } from '@/components/ui/form'
// lib
import { apiLoginUser } from '@/lib/services/auth'
import { loginSchema, LoginFormData } from '@/lib/zod/auth'
import { useAppContext } from '@/lib/context'
import { routes } from '@/lib/constants'

export default function LoginFormRef() {
	const { setToken, setUserData } = useAppContext()
	const [isServerError, setIsServerError] = useState<boolean>(false)
	const router = useRouter()

	// Form
	const form = useForm<LoginFormData>({
		resolver: zodResolver(loginSchema),
		defaultValues: {
			email: '',
			password: '',
			remember_me: false,
		},
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
					localStorage.setItem('token', JSON.stringify(res.data.token))
				setToken(res.data.token)
				setUserData(res.data.user)
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
		<Form {...form}>
			<form
				onSubmit={form.handleSubmit(onSubmit)}
				className="flex flex-col gap-6"
			>
				<AlertNotif isError={isServerError}>
					<p>Niepoprawne dane do logowania!</p>
					<p>Uzupełnij ponownie</p>
				</AlertNotif>
				<Group>
					<InputShadcn
						control={form.control}
						name="email"
						type="email"
						placeholder="Wpisz e-mail"
						label="Adres e-mail"
					/>
					<InputPasswordShadcn
						control={form.control}
						name="password"
						placeholder="Wpisz hasło"
						label="Hasło"
					/>
				</Group>
				<InputCheckboxShadcn
					control={form.control}
					label="Zapamiętaj mnie"
					name="remember_me"
				/>
				<Group gap="2">
					<Button className="w-full">Zaloguj</Button>
					<Link
						href={routes.AUTH_FORGOT_PASSWORD}
						className="flex-center underline text-sm text-jc-text4"
					>
						<p className="p-1">Zapomniałem hasło</p>
					</Link>
				</Group>
			</form>
		</Form>
	)
}
