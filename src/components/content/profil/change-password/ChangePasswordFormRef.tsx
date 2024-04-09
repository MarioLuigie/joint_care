'use client'
import { useForm } from 'react-hook-form'
import InputRef from '@/components/shared/inputsRef/InputRef'
import { Button } from '@/components/ui/button';
import PasswordRequierds from '@/components/content/auth/partials/PasswordRequierds';
import { RegistrationFormErrors } from '@/lib/types';
import { errorMsg } from '@/lib/constants';
import { useState } from 'react';

export default function ChangePasswordFormRef() {
  
  const initFormErrors: RegistrationFormErrors = {
		email: [
			errorMsg.EMPTY
		],
		password: [
			errorMsg.PASSWORD_LETTER_SIZE,
			errorMsg.PASSWORD_DIGIT,
			errorMsg.PASSWORD_SPECIAL_CHAR,
			errorMsg.PASSWORD_LENGTH
			,
		],
		password_confirmation: [
			errorMsg.EMPTY
		],
		accept_statute: [
			errorMsg.ACCEPT_STATUTE
		]
	}
  const [formErrors, setFormErrors] =
  useState<RegistrationFormErrors>(initFormErrors)

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()

  const onSubmit = async (data: any) => {
    try {
      console.log('Zapisz dane usera')
    } catch (err) {
      console.error('There is a problem with change your password:', err)
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-8'>
      <div className='flex flex-col gap-4'>
        <InputRef 
          {...register('password')}
          type='text'
          label='Nowe hasło'
          placeholder='Wpisz'
          error={errors.name}
        />
        <InputRef 
          {...register('confirm_password')}
          type='text'
          label='Powtórz nowe hasło'
          placeholder='Wpisz'
          error={errors.date}
        />
      </div>
      <PasswordRequierds errors={formErrors.password} />
      <Button className='w-40'>Zmień hasło</Button>
    </form>
  )
}