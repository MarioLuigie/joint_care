'use client'
// modules
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
// components
import { Form } from '@/components/ui/form'
import { Button } from '@/components/ui/button'
import InputPasswordShadcn from '@/components/shared/inputs/shadcn/InputPasswordShadcn'
import PasswordReq from '@/components/shared/common/PasswordReq'
import Group from '@/components/shared/containers/Group'
// lib
import { changePasswordSchema, ChangePasswordFormData } from '@/lib/utils/zod'

export default function ChangePasswordFormRef() {
	// Form
	const form = useForm<ChangePasswordFormData>({
		resolver: zodResolver(changePasswordSchema),
		defaultValues: {
			password: '',
			confirm_password: '',
		},
	})

	// Action on submit
	const onSubmit = async (data: ChangePasswordFormData) => {
		try {
			console.log(data)
		} catch (err) {
			console.error(err)
		}
	}

	return (
		<Form {...form}>
			<form
				onSubmit={form.handleSubmit(onSubmit)}
				className="flex flex-col gap-6"
			>
				<Group>
					<InputPasswordShadcn
						control={form.control}
						name="password"
						placeholder="Wpisz nowe hasło"
						label="Nowe hasło"
					/>
					<InputPasswordShadcn
						control={form.control}
						name="confirm_password"
						placeholder="Powtórz nowe hasło"
						label="Powtórzenie nowego hasła"
					/>
				</Group>
				<PasswordReq password={form.watch('password')} />
				<Button className="w-40">Zmień hasło</Button>
			</form>
		</Form>
	)
}
