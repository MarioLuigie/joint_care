import { z } from 'zod'

export const basicDatasSchema = z.object({
	stiff: z.boolean(),
	vas: z.number().min(0).max(10),
	was_pga: z.number().min(0).max(10),
})

export const monitoringWristbandSchema = z.object({
	numbOfHoursOfSleep: z.number(),
	numbOfSteps: z.number(),
	numbOfBreaths: z.number(),
	pulse: z.number()
})

export type BasicDatasFormData = z.infer<typeof basicDatasSchema>
export type MonitoringWristbandFormData = z.infer<typeof monitoringWristbandSchema>