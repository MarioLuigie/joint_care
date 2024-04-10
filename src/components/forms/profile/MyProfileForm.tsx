'use client'
import { useForm } from 'react-hook-form'
import InputRef from '@/components/shared/inputs/reference/InputRef'
import { Button } from '@/components/ui/button'
import InputRadioGroup from '@/components/shared/inputs/basic/InputRadioGroup'

export default function MyProfileFormRef() {
	const radios = [
		{ label: 'Kobieta', value: 'woman' },
		{ label: 'Mężczyzna', value: 'man' },
	]

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm()

	const onSubmit = async (data: any) => {
		try {
			console.log('Zapisz dane usera')
		} catch (err) {
			console.error('There is a problem with saving user data:', err)
		}
	}

	return (
		<form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-8">
			<div className="flex flex-col gap-4">
				<InputRadioGroup radios={radios} />
				<InputRef
					{...register('name')}
					type="text"
					label="Imię i Nazwisko"
					placeholder="Wpisz"
					error={errors.name}
				/>
				<InputRef
					{...register('date')}
					type="text"
					label="Data urodzenia"
					placeholder="Wpisz"
					error={errors.date}
				/>
				<InputRef
					{...register('weight')}
					type="number"
					label="Waga"
					placeholder="Wpisz"
					error={errors.weight}
				/>
				<InputRef
					{...register('height')}
					type="number"
					label="Wzrost"
					placeholder="Wpisz"
					error={errors.height}
				/>
				<InputRef
					{...register('email')}
					type="email"
					label="Adres e-mail"
					placeholder="Wpisz"
					error={errors.email}
				/>
				<InputRef
					{...register('address')}
					type="text"
					label="Adres zamieszkania"
					placeholder="Wpisz"
					error={errors.address}
				/>
			</div>
			<Button className="w-40">Zapisz zmiany</Button>
		</form>
	)
}
