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

//Data returned before logged in success
interface UserData {
	avatar: string | null
	birth_date: string | null
	city: string | null
	created_at: string
	email: string
	email_verified_at: string | null
	height: number | null
	id: number
	last_name: string | null
	name: string
	sex: string | null
	updated_at: string
	weight: number | null
}
export interface User {
	token: string
	user: UserData
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
