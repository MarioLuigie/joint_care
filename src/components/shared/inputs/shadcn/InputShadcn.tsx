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

interface InputShadcnProps {
	control: Control<any>
	name: string
	placeholder?: string
	label?: string
}

export default function InputShadcn({
	control,
	label,
	name,
	placeholder,
}: InputShadcnProps) {
	return (
		<FormField
			name={name}
			control={control}
			render={({ field }) => (
				<FormItem>
					<FormLabel>{label}</FormLabel>
					<FormControl>
						<Input placeholder={placeholder} {...field} />
					</FormControl>
					<FormMessage />
				</FormItem>
			)}
		/>
	)
}
