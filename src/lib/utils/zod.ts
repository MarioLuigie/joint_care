import { z } from 'zod'

export const loginSchema = z.object({
	email: z
		.string()
		.email({ message: 'Niepoprawny adres email' }),
	password: z
		.string()
		.min(1, { message: 'Hasło jest wymagane' })
		.min(3, { message: 'Hasło jest wymagane - minium 3' })
		.min(5, { message: 'Hasło jest wymagane - minium 5' }),
})
