'use client'

import {
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'

interface InputProps {
	control: any
	name: any
	placeholder?: string
	label?: string
}

export default function InputShadcn({ control, name, label, placeholder }: InputProps) {
	return (
		<FormField
			name={name}
			control={control}
			render={({ field }) => (
				<FormItem >
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
