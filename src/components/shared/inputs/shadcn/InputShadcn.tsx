'use client'
import {
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Control } from 'react-hook-form'

export default function InputShadcn({
	control,
	label,
	name,
	placeholder,
	type = 'text',
}: {
	control: Control<any>
	name: string
	placeholder: string
	label: string
	type?: string
}) {
	return (
		<FormField
			name={name}
			control={control}
			render={({ field, fieldState: { error } }) => (
				<FormItem>
					<FormItem className="relative">
						<FormControl>
							<Input
								className={`jc-input ${
									error ? 'border-jc-red' : 'border-slate-300'
								}`}
								placeholder={placeholder}
								type={type}
								{...field}
							/>
						</FormControl>
						<FormLabel className="jc-inputLabel">
							{label} <span className="text-jc-blue">*</span>
						</FormLabel>
					</FormItem>
					<FormMessage className="text-xs ml-3" />
				</FormItem>
			)}
		/>
	)
}
