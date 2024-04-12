import { z } from 'zod'
import { msg } from '@/lib/constants'

// Password validation rules
export const passwordValidationRules = z
	.string()
	.min(8, { message: msg.PASSWORD_LENGTH })
	.regex(/[a-z]/, { message: msg.PASSWORD_LETTER_SIZE })
	.regex(/[A-Z]/, { message: msg.PASSWORD_LETTER_SIZE })
	.regex(/\d/, { message: msg.PASSWORD_DIGIT })
	.regex(/[^A-Za-z0-9]/, { message: msg.PASSWORD_SPECIAL_CHAR })

// Password confirmation error
export const passwordConfirmationError = {
	message: msg.PASSWORD_CONFIRMATION,
	path: ['password_confirmation'],
}

// Validate password confirmation
export const validatePasswordConfirmation = (data: {
	password: string
	password_confirmation: string
}) => data.password === data.password_confirmation
