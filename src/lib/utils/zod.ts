import { z } from 'zod'
import { msg } from '@/lib/constants'

// Login
export const loginSchema = z.object({
	email: z.string().email({ message: 'errorMsg.EMAIL' }),
	password: z
		.string()
		.min(1, { message: msg.PASSWORD })
		.min(8, { message: msg.PASSWORD_LENGTH }),
})

// Forgot Password
export const forgotPasswordSchema = z.object({
	email: z.string().email({ message: msg.EMAIL }),
})

// Registration
export const registrationSchema = z
	.object({
		email: z.string().email({ message: msg.EMAIL }),
		password: z
			.string()
			.min(8, { message: msg.PASSWORD_LENGTH })
			.regex(/[a-z]/, { message: msg.PASSWORD_LETTER_SIZE })
			.regex(/[A-Z]/, { message: msg.PASSWORD_LETTER_SIZE })
			.regex(/\d/, { message: msg.PASSWORD_DIGIT })
			.regex(/[^A-Za-z0-9]/, { message: msg.PASSWORD_SPECIAL_CHAR }),
		password_confirmation: z.string(),
		accept_statute: z
			.boolean()
			.refine((value) => value === true, { message: msg.ACCEPT_STATUTE }),
	})
	.refine((data) => data.password === data.password_confirmation, {
		message: msg.PASSWORD_CONFIRMATION,
		path: ['password_confirmation'],
	})

// Types
export type LoginFormData = z.infer<typeof loginSchema>
export type ForgotPasswordFormData = z.infer<typeof forgotPasswordSchema>
export type RegistrationFormData = z.infer<typeof registrationSchema>
