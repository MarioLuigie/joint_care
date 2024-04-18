import { z } from 'zod'
import { Gender } from '@/lib/types'


export const profileSchema = z.object({
	name: z.string().min(2),
	surname: z.string().min(2),
	date: z.string(),
	weight: z.string().min(1),
	height: z.string().min(1),
	email: z.string().email(),
	address: z.string().min(2),
	sex: z.nativeEnum(Gender)
})

export type ProfileFormData = z.infer<typeof profileSchema>
