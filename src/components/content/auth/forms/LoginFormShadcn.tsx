'use client'
// modules
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { zodResolver } from '@hookform/resolvers/zod'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
// components
import InputRef from '@/components/shared/inputsRef/InputRef'
import InputShadcn from '@/components/shared/inputsShadcn/InputShadcn'
import InputPasswordRef from '@/components/shared/inputsRef/InputPasswordRef'
import IncorrectDataAlert from '@/components/content/auth/notifs/IncorrectDataAlert'
import AlertNotif from '@/components/shared/notifs/AlertNotif'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '@/components/ui/form'
// lib
import { loginSchema } from '@/lib/utils/zod'
import { apiLoginUser } from '@/lib/api/auth-api'
import { setUserProfile } from '@/lib/utils'
import { routes } from '@/lib/constants'

export default function LoginFormRef() {
	const [isServerError, setIsServerError] = useState<boolean>(false)
	const router = useRouter()

	// FORM
	const form = useForm<z.infer<typeof loginSchema>>({
		resolver: zodResolver(loginSchema),
		defaultValues: {
			email: '',
			password: '',
		},
	})

	// SUBMIT FORM
	const onSubmit = async (values: z.infer<typeof loginSchema>) => {
		console.log(values)
		const data = await apiLoginUser(values)
		if (data.errors) {
			setIsServerError(true)
		}
		if (data.success) {
			setUserProfile(data)
			const profile = localStorage.getItem('profile')

			if (profile !== null) {
				router.push(routes.DASHBOARD)
			}
		}
	}

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
				<InputShadcn 
					control={form.control}
					placeholder="Wpisz e-mail"
					label="Adres e-mail"
					name="password"
				/>
				<Button className="w-full">Zaloguj</Button>
				<Link
					href={routes.FORGOT_PASSWORD}
					className="flex-center underline text-sm text-jc-text4"
				>
					<p>Zapomniałem hasło</p>
				</Link>
			</form>
		</Form>
	)
}
