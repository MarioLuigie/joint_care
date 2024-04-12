import { z } from 'zod'

export const profileSchema = z.object({
	name: z.string().min(2).max(50),
	date: z.string(),
	weight: z.string().min(1),
	height: z.string().min(1),
	email: z.string().email(),
	address: z.string().min(2),
	gender: z.string().min(2),
})

export type ProfileFormData = z.infer<typeof profileSchema>
