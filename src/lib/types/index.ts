export interface Children {
	children: React.ReactNode
}

export interface IRegistration {
	email: string
	password: string
	password_confirmation: string
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
