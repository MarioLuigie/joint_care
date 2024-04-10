'use client'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { useState } from 'react'

import Input from '@/components/shared/inputs/Input'
import AlertNotif from '@/components/shared/notifs/AlertNotif'
import { ForgotPasswordFormData, ForgotPasswordFormErrors } from '@/lib/types'
import { validateForgotPassword } from '@/lib/utils/validators'
import { msg, routes } from '@/lib/constants'
import AccountNotExistAlert from '@/components/content/auth/notifs/AccountNotExistAlert'

export default function ForgotPasswordForm() {
	const initFormData: ForgotPasswordFormData = {
		email: '',
	}
	const initFormErrors: ForgotPasswordFormErrors = {
		email: [msg.EMPTY],
	}

	const [formData, setFormData] = useState<ForgotPasswordFormData>(initFormData)
	const [formErrors, setFormErrors] = useState<ForgotPasswordFormErrors>(initFormErrors)

	const [isServerError, setIsServerError] = useState<boolean>(false)
	const [isClientError, setIsClientError] = useState<boolean>(false)

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const updatedFormData = {
			...formData,
			email: e.target.value,
		}

		setFormErrors(validateForgotPassword(updatedFormData))
		setFormData(updatedFormData)
	}

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsClientError(true)
		console.log('Send')
	}

	return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
      <AlertNotif isError={isServerError}>
        <AccountNotExistAlert/>
      </AlertNotif>
      <Input
        handleChange={handleChange}
        label="Adres e-mail"
        name="email"
        placeholder="Wpisz"
        type="email"
        isError={isClientError}
        errors={formErrors.email}
        value={formData.email}
      />
      <Button className="w-full">
        Wyślij
      </Button>
      <Link
        href={routes.LOGIN}
        className="flex-center underline text-sm text-jc-text4"
      >
        <p>Wróć do logowania</p>
      </Link>
    </form>
	)
}
