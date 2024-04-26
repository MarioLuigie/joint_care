'use client'
//modules
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
//components
import Group from '@/components/shared/containers/Group'
import Paper from '@/components/shared/containers/Paper'
import WarningNotif from '@/components/shared/notifs/WarningNotif'
import InputShadcn from '@/components/shared/inputs/shadcn/InputShadcn'
import { Form } from '@/components/ui/form'
import FormShadcn from '@/components/shared/inputs/shadcn/FormShadcn'
//lib
import { questSections } from '@/lib/constants/quest'
import { MonitoringWristbandFormData } from '@/lib/zod/quest'
import { monitoringWristbandSchema } from '@/lib/zod/quest'

export default function MonitoringWristband() {
	const form = useForm<MonitoringWristbandFormData>({
		resolver: zodResolver(monitoringWristbandSchema),
		defaultValues: {
			numbOfHoursOfSleep: 0,
			numbOfSteps: 0,
			numbOfBreaths: 0,
			pulse: 0,
		},
	})

	const onSubmit = () => {}

	return (
		<Paper className="w-full h-full">
			<FormShadcn form={form} onSubmit={onSubmit}>
				<Group className="flex flex-col gap-6 w-full h-full">
					<div className="flex flex-col gap-12">
						<p className="text-[26px] font-bold">
							{questSections.monitoringWristband.label}
						</p>
						<WarningNotif
							isError={true}
							icon="/assets/icons/ecg-monitor.svg"
						>
							<div className="flex gap-4 p-2">
								<p className="text-jc-text1 text-base">
									Brak podłączonego urządzenia
								</p>
								<p className="underline text-base font-semibold text-jc-orange cursor-pointer">
									Podłącz urządzenie
								</p>
							</div>
						</WarningNotif>
					</div>
					{/* Insert datas manually */}
					<div className="flex flex-col gap-6">
						<p className="font-semibold text-lg">Wprowadź dane ręcznie</p>
						<div className="grid grid-cols-2 gap-y-3 gap-x-4">
							<InputShadcn
								control={form.control}
								type="number"
								name="sleepHours"
								label="Sen"
								placeholder=""
								optional
							/>
							<InputShadcn
								control={form.control}
								type="number"
								name="steps"
								label="Liczba kroków"
								placeholder=""
								optional
							/>
							<InputShadcn
								control={form.control}
								type="number"
								name="breaths"
								label="Liczba oddechów"
								placeholder=""
								optional
							/>
							<InputShadcn
								control={form.control}
								type="number"
								name="pulse"
								label="Tętno"
								placeholder=""
								optional
							/>
						</div>
					</div>
				</Group>
			</FormShadcn>
		</Paper>
	)
}
