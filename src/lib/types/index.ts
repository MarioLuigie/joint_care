export interface Children {
	children: React.ReactNode
}

export interface RegisterValidationErrors {
	[key: string]: boolean
	email: boolean
	password_confirmation: boolean
	password_length: boolean
	password_letter_size: boolean
	password_special_chars: boolean
	password_digit: boolean
}

export interface LoginValidationErrors {
	[key: string]: boolean
	email: boolean
	password_length: boolean
}

export interface ForgotPasswordValidationErrors {
	email: boolean
}

export interface RegistrationFormData {
	email: string
	password: string
	password_confirmation: string
}

export interface LoginFormData {
	email: string
	password: string
}

export interface ForgotPasswordFormData {
	email: string
}

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
