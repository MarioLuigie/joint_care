'use client'

import {
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '@/components/ui/form'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Control } from 'react-hook-form'

export default function InputRadioGroupShadcn({
	items,
	control,
	name,
}: {
	items: { label: string; value: string }[]
	control: Control<any>
	name: string
}) {
	return (
		<FormField
			name={name}
			control={control}
			render={({ field }) => (
				<FormItem>
					<FormItem className="relative">
						<FormControl>
							<RadioGroup
								className="flex gap-4"
								onValueChange={field.onChange}
								value={field.value}
							>
								{items.map((item, i) => (
									<FormItem
										className="flex items-center space-x-1 space-y-0"
										key={i}
									>
										<FormControl>
											<RadioGroupItem
												value={item.value}
												className="border-slate-400 text-jc-blue focus:border-jc-blue"
											/>
										</FormControl>
										<FormLabel>{item.label}</FormLabel>
									</FormItem>
								))}
							</RadioGroup>
						</FormControl>
					</FormItem>
					<FormMessage className="text-xs ml-3" />
				</FormItem>
			)}
		/>
	)
}
