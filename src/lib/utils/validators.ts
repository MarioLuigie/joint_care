import {
	ForgotPasswordFormData,
	ForgotPasswordValidators,
	LoginFormData,
	LoginValidators,
	RegisterValidators,
	RegistrationFormData,
} from '@/lib/types'
import { errorMsg } from '@/lib/constants'

// Validators
const V = {
	digit: (text: string) => /\d/.test(text),
	lowercase: (text: string) => /[a-z]/.test(text),
	uppercase: (text: string) => /[A-Z]/.test(text),
	specialChar: (text: string) => /[^A-Za-z0-9]/.test(text),
	email: (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email),
	minLength: (text: string, numb: number) => text.length >= numb,
	maxLength: (text: string, numb: number) => text.length <= numb,
	match: (text1: string, text2: string) => text1 === text2,
}

// Registration validation
export const validateRegistration = (data: RegistrationFormData) => {
	const errors: RegisterValidators = {
		email: [
			{
				error: V.email(data.email),
				msg: errorMsg.EMAIL,
			},
		],
		password: [
			{
				error: V.lowercase(data.password) && V.uppercase(data.password),
				msg: errorMsg.PASSWORD_LETTER_SIZE,
			},
			{
				error: V.digit(data.password),
				msg: errorMsg.PASSWORD_DIGIT,
			},
			{
				error: V.specialChar(data.password),
				msg: errorMsg.PASSWORD_SPECIAL_CHAR,
			},
			{
				error: V.minLength(data.password, 8),
				msg: errorMsg.PASSWORD_LENGTH,
			},
		],
		password_confirmation: [
			{
				error: V.match(data.password, data.password_confirmation),
				msg: errorMsg.PASSWORD_CONFIRMATION,
			},
		],
	}
	return errors
}

// Login validation
export const validateLogin = (data: LoginFormData) => {
	const errors: LoginValidators = {
		email: [
			{
				error: V.email(data.email),
				msg: errorMsg.EMAIL,
			},
		],
		password: [
			{
				error: V.minLength(data.password, 1),
				msg: errorMsg.PASSWORD,
			},
		],
	}
	return errors
}

// Forgot Password validation
export const validateForgotPassword = (data: ForgotPasswordFormData) => {
	const errors: ForgotPasswordValidators = {
		email: [
			{
				error: V.email(data.email),
				msg: errorMsg.EMAIL,
			},
		],
	}
	return errors
}
