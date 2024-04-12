import { z } from 'zod'
import { msg } from '@/lib/constants'

// Password validation rules
const passwordValidationRules = z
	.string()
	.min(8, { message: msg.PASSWORD_LENGTH })
	.regex(/[a-z]/, { message: msg.PASSWORD_LETTER_SIZE })
	.regex(/[A-Z]/, { message: msg.PASSWORD_LETTER_SIZE })
	.regex(/\d/, { message: msg.PASSWORD_DIGIT })
	.regex(/[^A-Za-z0-9]/, { message: msg.PASSWORD_SPECIAL_CHAR })

// Password confirmation rule


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
	.refine((data) => data.password === data.password_confirmation, {
		message: msg.PASSWORD_CONFIRMATION,
		path: ['password_confirmation'],
	})

// Change Password
export const changePasswordSchema = z
	.object({
		password: passwordValidationRules,
		confirm_password: z.string(),
	})
	.refine((data) => data.password === data.confirm_password, {
		message: msg.PASSWORD_CONFIRMATION,
		path: ['confirm_password'],
	})

// Types
export type ChangePasswordFormData = z.infer<typeof changePasswordSchema>
export type ForgotPasswordFormData = z.infer<typeof forgotPasswordSchema>
export type LoginFormData = z.infer<typeof loginSchema>
export type RegistrationFormData = z.infer<typeof registrationSchema>
