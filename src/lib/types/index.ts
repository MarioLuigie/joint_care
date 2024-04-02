import { Validator } from "react"

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

// Errors
export interface Errors {
	[key: string]: string[]
}

// ForgotPassword
export interface ForgotPasswordFormData {
	email: string
}
export interface ForgotPasswordFormErrors extends Errors {
	email: string[]
}

// Login
export interface LoginFormData {
	email: string
	password: string
}
export interface LoginFormErrors extends Errors {
	email: string[]
	password: string[]
}

// Registration
export interface RegistrationFormData {
	email: string
	password: string
	password_confirmation: string
	accept_statute: boolean
}
export interface RegistrationFormErrors extends Errors {
	email: string[]
	password: string[]
	password_confirmation: string[]
	accept_statute: string[]
}
