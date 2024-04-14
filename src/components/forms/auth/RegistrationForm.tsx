'use client'
// modules
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { zodResolver } from '@hookform/resolvers/zod'
import Link from 'next/link'
// components
import { Button } from '@/components/ui/button'
import { Form } from '@/components/ui/form'
import InputCheckboxShadcn from '@/components/shared/inputs/shadcn/InputCheckboxShadcn'
import InputPasswordShadcn from '@/components/shared/inputs/shadcn/InputPasswordShadcn'
import InputShadcn from '@/components/shared/inputs/shadcn/InputShadcn'
import PasswordReq from '@/components/shared/common/PasswordReq'
import WarningNotif from '@/components/shared/notifs/WarningNotif'
// lib
import Group from '@/components/shared/containers/Group'
import { registrationSchema, RegistrationFormData } from '@/lib/zod/auth'
import { apiRegisterUser } from '@/lib/services/auth'
import { routes } from '@/lib/constants'

export default function RegistrationFormRef() {
	const [isServerError, setIsServerError] = useState<boolean>(false)
	const router = useRouter()

	// Form
	const form = useForm<RegistrationFormData>({
		resolver: zodResolver(registrationSchema),
		defaultValues: {
			email: '',
			password: '',
			password_confirmation: '',
			accept_statute: false,
		},
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
			<Link href="#" className="underline text-sm font-medium text-jc-text1">
				Regulamin serwisu
			</Link>
		</div>
	)

	// Existing Account Warning
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
		<Form {...form}>
			<form
				onSubmit={form.handleSubmit(onSubmit)}
				className="flex flex-col gap-6"
			>
				<WarningNotif isError={isServerError}>
					<ExistingAccountWarning />
				</WarningNotif>
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
						label="Hasło"
						placeholder="Wpisz hasło"
					/>
					<InputPasswordShadcn
						control={form.control}
						name="password_confirmation"
						label="Powtórzenie hasła"
						placeholder="Powtórz hasło"
					/>
				</Group>
				<PasswordReq password={form.watch('password')} />
				<InputCheckboxShadcn
					control={form.control}
					name="accept_statute"
					label={<AcceptStatute />}
				/>
				<Button className="w-full">Załóż konto</Button>
			</form>
		</Form>
	)
}
