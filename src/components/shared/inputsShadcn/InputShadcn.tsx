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

interface InputProps {
	control: Control<any>
	label?: string
	name: string
	placeholder?: string
}

export default function InputShadcn({
	control,
	label,
	name,
	placeholder,
}: InputProps) {
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
