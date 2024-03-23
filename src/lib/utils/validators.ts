import {
	ForgotPasswordFormData,
	ForgotPasswordFormErrors,
	LoginFormData,
	LoginFormErrors,
	RegistrationFormErrors,
	RegistrationFormData,
} from '@/lib/types'
import { errorMsg } from '@/lib/constants'

// Validators
const V = {
	digit: (data: string, msg: string) => /\d/.test(data) ? '' : msg,
	lowercase: (data: string, msg: string) => /[a-z]/.test(data) ? '' : msg,
	uppercase: (data: string, msg: string) => /[A-Z]/.test(data) ? '' : msg,
	lettersize: (data: string, msg: string) => /[a-z]/.test(data) && /[A-Z]/.test(data) ? '' : msg,
	specialChar: (data: string, msg: string) => /[^A-Za-z0-9]/.test(data) ? '' : msg,
	email: (data: string, msg: string) =>	/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data) ? '' : msg,
	minLength: (num: number, data: string, msg: string) => data.length >= num ? '' : msg,
	maxLength: (num: number, data: string, msg: string) => data.length <= num ? '' : msg,
	match: (data1: string, data2: string, msg: string) =>	data1 === data2 ? '' : msg,
}

// Registration validation
export const validateRegistration = (data: RegistrationFormData) => {
	const errors: RegistrationFormErrors = {
		email: [
			V.email(data.email, errorMsg.EMAIL)
		],
		password: [
			V.lettersize(data.password, errorMsg.PASSWORD_LETTER_SIZE),
			V.digit(data.password, errorMsg.PASSWORD_DIGIT),
			V.specialChar(data.password, errorMsg.PASSWORD_SPECIAL_CHAR),
			V.minLength(8, data.password, errorMsg.PASSWORD_LENGTH),
		],
		password_confirmation: [
			V.match(data.password, data.password_confirmation,	errorMsg.PASSWORD_CONFIRMATION),
		],
	}
	return errors
}

// Login validation
export const validateLogin = (data: LoginFormData) => {
	const errors: LoginFormErrors = {
		email: [
			V.email(data.email, errorMsg.EMAIL)
		],
		password: [
			V.minLength(1, data.password, errorMsg.PASSWORD)
		],
	}
	return errors
}

// Forgot Password validation
export const validateForgotPassword = (data: ForgotPasswordFormData) => {
	const errors: ForgotPasswordFormErrors = {
		email: [
			V.email(data.email, errorMsg.EMAIL)
		],
	}
	return errors
}
