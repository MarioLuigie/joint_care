export interface Children {
	children: React.ReactNode
}

// Footer
export interface Language {
	value: string
	src: string
	size: number
	alt: string
}
export interface Social {
	src: string
	href: string
	size: number
	alt: string
}

// Validators
export interface Validator {
	error: boolean
	msg: string
}
export interface Validators {
	[key: string]: Validator[]
}

// ForgotPassword
export interface ForgotPasswordFormData {
	email: string
}
export interface ForgotPasswordValidators extends Validators {
	email: Validator[]
}

// Login
export interface LoginFormData {
	email: string
	password: string
}
export interface LoginValidators extends Validators {
	email: Validator[]
	password: Validator[]
}

// Registration
export interface RegistrationFormData {
	email: string
	password: string
	password_confirmation: string
}
export interface RegisterValidators extends Validators {
	email: Validator[]
	password: Validator[]
	password_confirmation: Validator[]
}
