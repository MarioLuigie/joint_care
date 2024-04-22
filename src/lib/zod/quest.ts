import { z } from 'zod'

export const questSchema = z.object({
	stiff: z.boolean(),
	vas: z.number().min(0).max(10),
	was_pga: z.number().min(0).max(10),
})

export type QuestFormData = z.infer<typeof questSchema>