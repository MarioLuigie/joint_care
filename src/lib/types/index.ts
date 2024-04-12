export interface Children {
	children: React.ReactNode
}

export interface UserData {
	avatar: string | null
	birth_date: string | null
	city: string | null
	created_at: string
	email_verified_at: string | null
	email: string
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
