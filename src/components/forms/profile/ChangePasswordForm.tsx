'use client'
import { useForm } from 'react-hook-form'
import { Button } from '@/components/ui/button'
import PasswordReq from '@/components/shared/common/PasswordReq'
import InputRef from '@/components/shared/inputs/reference/InputRef'

export default function ChangePasswordFormRef() {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm()

	const onSubmit = async (data: any) => {
		try {
			console.log(data)
		} catch (err) {
			console.error(err)
		}
	}

	return (
		<form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-8">
			<div className="flex flex-col gap-4">
				<InputRef
					{...register('password')}
					type="text"
					label="Nowe hasło"
					placeholder="Wpisz"
					error={errors.name}
				/>
				<InputRef
					{...register('confirm_password')}
					type="text"
					label="Powtórz nowe hasło"
					placeholder="Wpisz"
					error={errors.date}
				/>
			</div>
			<PasswordReq password={''} />
			<Button className="w-40">Zmień hasło</Button>
		</form>
	)
}
