'use client'
// modules
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
// components
import { Form } from '@/components/ui/form'
import { Button } from '@/components/ui/button'
import InputRadioGroup from '@/components/shared/inputs/basic/InputRadioGroup'
import InputShadcn from '@/components/shared/inputs/shadcn/InputShadcn'
// lib
import { profileSchema, ProfileFormData } from '@/lib/zod/profile'
import { getUserProfile, updateUserProfile } from '@/lib/services/profile'
import { useAppContext } from '@/lib/context'
import { UserData } from '@/lib/types'
import { useEffect } from 'react'

export default function MyProfileForm() {
	const radios = [
		{ label: 'Kobieta', value: 'woman' },
		{ label: 'Mężczyzna', value: 'man' },
	]

	const { user } = useAppContext()

	useEffect(() => {
		const fetchUserProfile = async () => {
			if (user && user.token) {
				const res = await getUserProfile(user.token)

				if (res.success) {
					const { user }: { user: UserData } = res.data
					console.log(user)

					const profileData: ProfileFormData = {
						name: user.name,
						date: user.birth_date || '',
						weight: user.weight ? String(user.weight) : '' || '',
						height: user.height ? String(user.height) : '' || '',
						email: user.email || '',
						address: user.city || '',
						gender: user.sex || 'men',
					}
					form.reset(profileData)
				}
			}
		}
		fetchUserProfile()
	}, [user])

	const defaultValues = {
		name: '',
		date: '',
		weight: '',
		height: '',
		email: '',
		address: '',
		gender: 'men',
	}

	const form = useForm({
		resolver: zodResolver(profileSchema),
		defaultValues,
	})

	const onSubmit = async (data: ProfileFormData) => {
		try {
			if (user && user.token) {
				console.log(data)
				const res = await updateUserProfile(user?.token, data)
				console.log(res)
			}

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
				<div className="flex flex-col gap-4">
					<InputRadioGroup radios={radios} />
					<InputShadcn
						control={form.control}
						name="name"
						placeholder="Wpisz imię i nzwisko"
						label="Imię i Nazwisko"
					/>
					<InputShadcn
						control={form.control}
						name="date"
						type="date"
						placeholder="Wpisz datę urodzenia"
						label="Data urodzenia"
					/>
					<InputShadcn
						control={form.control}
						name="weight"
						type="number"
						placeholder="Wpisz wagę"
						label="Waga"
					/>
					<InputShadcn
						control={form.control}
						name="height"
						type="number"
						placeholder="Wpisz wzrost"
						label="Wzrost"
					/>
					<InputShadcn
						control={form.control}
						name="email"
						type="email"
						placeholder="Wpisz adres e-mail"
						label="Adres e-mail"
					/>
					<InputShadcn
						control={form.control}
						name="address"
						placeholder="Wpisz adres zamieszkania"
						label="Adres zamieszkania"
					/>
				</div>
				<Button className="w-40">Zapisz zmiany</Button>
			</form>
		</Form>
	)
}
