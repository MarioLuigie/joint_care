import { msg } from '@/lib/constants'

// Interfaces
export interface Errors {
	[key: string]: string[]
}
export interface RegistrationFormErrors extends Errors {
	email: string[]
	password: string[]
	password_confirmation: string[]
	accept_statute: string[]
}
export interface RegistrationFormData {
	email: string
	password: string
	password_confirmation: string
	accept_statute: boolean
}

// Validators
const V = {
	digit: (data: string, msg: string) => (/\d/.test(data) ? '' : msg),
	lowercase: (data: string, msg: string) => (/[a-z]/.test(data) ? '' : msg),
	uppercase: (data: string, msg: string) => (/[A-Z]/.test(data) ? '' : msg),
	lettersize: (data: string, msg: string) => /[a-z]/.test(data) && /[A-Z]/.test(data) ? '' : msg,
	specialChar: (data: string, msg: string) => /[^A-Za-z0-9]/.test(data) ? '' : msg,
	email: (data: string, msg: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data) ? '' : msg,
	minLength: (num: number, data: string, msg: string) => data.length >= num ? '' : msg,
	maxLength: (num: number, data: string, msg: string) => data.length <= num ? '' : msg,
	match: (data1: string, data2: string, msg: string) => data1 === data2 ? '' : msg,
	checked: (checked: boolean, msg: string) => (checked ? '' : msg),
}

// Validation
export const validateRegistration = (data: RegistrationFormData) => {
	const errors: RegistrationFormErrors = {
		email: [V.email(data.email, msg.EMAIL)],
		password: [
			V.lettersize(data.password, msg.PASSWORD_LETTER_SIZE),
			V.digit(data.password, msg.PASSWORD_DIGIT),
			V.specialChar(data.password, msg.PASSWORD_SPECIAL_CHAR),
			V.minLength(8, data.password, msg.PASSWORD_LENGTH),
		],
		password_confirmation: [
			V.match(
				data.password,
				data.password_confirmation,
				msg.PASSWORD_CONFIRMATION
			),
		],
		accept_statute: [V.checked(data.accept_statute, msg.ACCEPT_STATUTE)],
	}
	return errors
}

export function checkErrors(errors: Errors) {
	return Object.values(errors).every((errorsArray) =>
		errorsArray.every((error) => error === '')
	)
}
