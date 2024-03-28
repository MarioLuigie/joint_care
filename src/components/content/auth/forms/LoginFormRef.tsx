'use client'
// modules
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { useRef } from 'react'
// components
import { Button } from '@/components/ui/button'
import InputRef from '@/components/shared/inputsRef/InputRef'
// library
import { loginSchema } from '@/lib/utils/zod'
import { loginUser } from '@/lib/api/auth-api'
import { routes } from '@/lib/constants'

export default function LoginFormRef() {
	const router = useRouter()

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: zodResolver(loginSchema),
	})


	const onSubmit = async (data: any) => {
		const res = await loginUser(data)
		if (res.success) {
			router.push(routes.DASHBOARD)
		} else {
			console.log(res.errors)
		}
	}

	const inputRef = useRef(null)

	console.log(inputRef);
	

	return (
		<form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3">
			<div className="flex flex-col gap-3">
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
