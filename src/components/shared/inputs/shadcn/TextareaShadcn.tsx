'use client'
import {
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '@/components/ui/form'
import { Textarea } from '@/components/ui/textarea'
import { Control } from 'react-hook-form'

export default function TextareaShadcn({
	control,
	label,
	name,
	placeholder,
}: {
	control: Control<any>
	name: string
	label: string
	placeholder: string
}) {
	return (
		<FormField
			name={name}
			control={control}
			render={({ field, fieldState: { error } }) => (
				<FormItem>
					<FormItem className="relative">
						<FormControl>
							<Textarea
								className={`jc-textArea ${
									error ? 'border-jc-red' : 'border-slate-300'
								}`}
								placeholder={placeholder}
								{...field}
							/>
						</FormControl>
						<FormLabel className="jc-inputLabel">
							{label}
						</FormLabel>
					</FormItem>
					<FormMessage className="text-xs ml-3" />
				</FormItem>
			)}
		/>
	)
}
