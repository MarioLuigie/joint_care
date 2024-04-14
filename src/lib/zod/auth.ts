import {
	passwordConfirmationError,
	passwordValidationRules,
	validatePasswordConfirmation,
} from '@/lib/zod'
import { msg } from '@/lib/constants'
import { z } from 'zod'

// Login
export const loginSchema = z.object({
	email: z.string().email({ message: msg.EMAIL }),
	password: z.string().min(8, { message: msg.PASSWORD_LENGTH }),
	remember_me: z
		.boolean()
		.refine((value) => value === true, { message: 'Zapamiętaj mnie' }),
})

// Forgot Password
export const forgotPasswordSchema = z.object({
	email: z.string().email({ message: msg.EMAIL }),
})

// Change Password
export const changePasswordSchema = z
	.object({
		password: passwordValidationRules,
		password_confirmation: z.string(),
	})
	.refine(validatePasswordConfirmation, passwordConfirmationError)

// Registration
export const registrationSchema = z
	.object({
		email: z.string().email({ message: msg.EMAIL }),
		password: passwordValidationRules,
		password_confirmation: z.string(),
		accept_statute: z
			.boolean()
			.refine((value) => value === true, { message: msg.ACCEPT_STATUTE }),
	})
	.refine(validatePasswordConfirmation, passwordConfirmationError)

// Types
export type ChangePasswordFormData = z.infer<typeof changePasswordSchema>
export type ForgotPasswordFormData = z.infer<typeof forgotPasswordSchema>
export type RegistrationFormData = z.infer<typeof registrationSchema>
export type LoginFormData = z.infer<typeof loginSchema>
