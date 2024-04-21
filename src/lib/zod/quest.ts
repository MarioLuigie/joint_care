import { z } from 'zod'

export const questSchema = z.object({
	name: z.string().min(2),
})

export type QuestFormData = z.infer<typeof questSchema>