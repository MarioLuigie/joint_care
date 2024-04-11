'use client'

import {
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '@/components/ui/form'
import { Checkbox } from '@/components/ui/checkbox'
import { Control } from 'react-hook-form'

export default function InputCheckboxShadcn({
	control,
	label,
	name,
}: {
	control: Control<any>
	label: string
	name: string
}) {
	return (
		<FormField
			name={name}
			control={control}
			render={({ field, fieldState: { error } }) => (
				<FormItem>
					<FormItem className="flex-start space-x-2 space-y-0">
						<FormControl>
							<Checkbox
								checked={field.value}
								onCheckedChange={field.onChange}
								className={`${error ? 'border-jc-red' : 'border-slate-300'}`}
							/>
						</FormControl>
						<FormLabel className="text-black">{label}</FormLabel>
					</FormItem>
					<FormMessage className="text-xs ml-3" />
				</FormItem>
			)}
		/>
	)
}
