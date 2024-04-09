import { z } from 'zod'
import { errorMsg } from '../constants'

// LOGIN FORM
export const loginSchema = z.object({
	email: z
	.string()
	.email({ message: errorMsg.EMAIL }),
	password: z
	.string()
	.min(1, { message: errorMsg.PASSWORD })
	.min(8, { message: errorMsg.PASSWORD_LENGTH }),
})
