'use client'
import { Button } from '@/components/ui/button'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

import Input from '@/components/shared/inputs/Input'
import InputPassword from '@/components/shared/inputs/InputPassword'
import PasswordRequirements from '@/components/shared/common/PasswordRequirements'
import InputCheckbox from '@/components/shared/inputs/InputCheckBox'
import { RegistrationFormData } from '@/lib/types'
import { RegistrationFormErrors } from '@/lib/types'
import { apiRegisterUser } from '@/lib/api/auth-api'
import { validateRegistration } from '@/lib/utils/validators'
import { msg } from '@/lib/constants'
import { checkErrors } from '@/lib/utils'
import RegisteredAccountWarning from '@/components/content/auth/notifs/RegisteredAccountWarning'
import WarningNotif from '@/components/shared/notifs/WarningNotif'
import { routes } from '@/lib/constants'

export default function RegistrationForm() {
	const initFormData: RegistrationFormData = {
		email: '',
		password: '',
		password_confirmation: '',
		accept_statute: false,
	}

	const initFormErrors: RegistrationFormErrors = {
		email: [msg.EMPTY],
		password: [
			msg.PASSWORD_LETTER_SIZE,
			msg.PASSWORD_DIGIT,
			msg.PASSWORD_SPECIAL_CHAR,
			msg.PASSWORD_LENGTH,
		],
		password_confirmation: [msg.EMPTY],
		accept_statute: [msg.ACCEPT_STATUTE],
	}

	const router = useRouter()

	const [formData, setFormData] = useState<RegistrationFormData>(initFormData)
	const [formErrors, setFormErrors] =
		useState<RegistrationFormErrors>(initFormErrors)

	const [isClientError, setIsClientError] = useState<boolean>(false)
	const [isServerError, setIsServerError] = useState<boolean>(false)

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const updatedFormData = {
			...formData,
			[e.target.name]: e.target.value,
		}
		setFormErrors(validateRegistration(updatedFormData))
		setFormData(updatedFormData)
	}

	const handleCheck = (isChecked: boolean) =>  {
		const updatedFormData = {
			...formData,
			accept_statute: isChecked,
		}
		setFormData(updatedFormData)
		setFormErrors(validateRegistration(updatedFormData))
	}

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()

		if (checkErrors(formErrors)) {
			const data = await apiRegisterUser(formData)

			if (data.errors && data.errors.email) {
				setIsServerError(true)
			} else {
				setIsServerError(false)
			}

			if (data.success) {
				router.push(routes.REGISTER_SUCCESS)
			}
		} else {
			console.log('INVALID REGISTER FORM')
			setIsClientError(true)
		}
	}

	return (
		<form onSubmit={handleSubmit} className="flex flex-col gap-3">
			<WarningNotif isError={isServerError}>
				<RegisteredAccountWarning />
			</WarningNotif>

			<div className="flex flex-col gap-3">
				<Input
					handleChange={handleChange}
					label="Adres e-mail"
					name="email"
					placeholder="Wpisz e-mail"
					type="email"
					isError={isClientError}
					errors={formErrors.email}
					value={formData.email}
				/>
				<InputPassword
					handleChange={handleChange}
					label="Hasło"
					name="password"
					placeholder="Wpisz hasło"
					isError={isClientError}
					errors={formErrors.password}
					value={formData.password}
				/>
				<InputPassword
					handleChange={handleChange}
					label="Powtórzenie hasła"
					name="password_confirmation"
					placeholder="Powtórz hasło"
					isError={isClientError}
					errors={formErrors.password_confirmation}
					value={formData.password_confirmation}
				/>
			</div>
			<PasswordRequirements password={formData.password} />
			<div>
				<InputCheckbox
					id="accept_statute"
					name="accept_statute"
					checked={formData.accept_statute}
					handleCheck={handleCheck}
					label="Zakceptuj statut"
				/>
			</div>
			<div className="flex flex-col pt-5">
				<Button className="w-full">Załóż konto</Button>
			</div>
		</form>
	)
}
