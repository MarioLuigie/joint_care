'use client'
// modules
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useEffect, useState } from 'react'
// components
import { Form } from '@/components/ui/form'
import { Button } from '@/components/ui/button'
import InputRadioGroup from '@/components/shared/inputs/shadcn/InputRadioGroup'
import InputShadcn from '@/components/shared/inputs/shadcn/InputShadcn'
// lib
import { profileSchema, ProfileFormData } from '@/lib/zod/profile'
import { updateUserProfile } from '@/lib/services/profile'
import { useAppContext } from '@/lib/context'
import { Gender } from '@/lib/types'

export default function MyProfileForm() {
	const sexRadios = [
		{ label: 'Kobieta', value: Gender.FEMALE },
		{ label: 'Mężczyzna', value: Gender.MALE },
	]

	const [isLoading, setIsLoading] = useState(true)
	const { user, userData, setUserData } = useAppContext()

	const form = useForm({
		resolver: zodResolver(profileSchema),
		defaultValues: {
			name: '',
			surname: '',
			date: '',
			weight: '',
			height: '',
			email: '',
			address: '',
			sex: Gender.NULL,
		},
	})

	useEffect(() => {
		if (!userData) return
		const profileData: ProfileFormData = {
			name: userData.name || '',
			surname: userData.last_name || '',
			date: userData?.birth_date?.substring(0, 10) || '',
			weight: userData.weight ? String(userData.weight) : '',
			height: userData.height ? String(userData.height) : '',
			email: userData.email || '',
			address: userData.city || '',
			sex: userData.sex || Gender.NULL,
		}
		form.reset(profileData)
		setIsLoading(false)
	}, [userData, form])

	const onSubmit = async (data: ProfileFormData) => {
		try {
			if (user) {
				console.log(data)

				const res = await updateUserProfile(user.token, data)
				setUserData(res.data.user)
			}
		} catch (err) {
			console.error(err)
		}
	}

	if (isLoading) {
		return <div>Trwa ładowanie...</div>
	} else {
		return (
			<Form {...form}>
				<form
					onSubmit={form.handleSubmit(onSubmit)}
					className="flex flex-col gap-6"
				>
					<div className="flex flex-col gap-4">
						<InputRadioGroup
							items={sexRadios}
							control={form.control}
							name="sex"
						/>
						<InputShadcn
							control={form.control}
							name="name"
							placeholder="Wpisz imię"
							label="Imię"
						/>
						<InputShadcn
							control={form.control}
							name="surname"
							placeholder="Wpisz nazwisko"
							label="Nazwisko"
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
}
