export interface Children {
	children: React.ReactNode
}

export interface IValidationErrors {
	[key: string]: boolean
	email: boolean
	password_confirmation: boolean
	password_length: boolean
	password_letter_size: boolean
	password_special_characters: boolean
	password_digit: boolean
}

export interface IRegistrationForm {
	email: string
	password: string
	password_confirmation: string
}

export interface ILogin {
	email: string
	password: string
}

export interface ILogin {
	email: string
	password: string
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
