'use client'

import {
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '@/components/ui/form'
import { Control } from 'react-hook-form'
import { Input } from '@/components/ui/input'
import { ReactSVG } from 'react-svg'
import { useState } from 'react'

export default function InputShadcn({
	control,
	label,
	name,
	placeholder,
}: {
	control: Control<any>
	name: string
	placeholder: string
	label: string
}) {
	const [isPasswordHidden, setIsPasswordHidden] = useState<boolean>(true)

	const handleShowPassword = () => {
		setIsPasswordHidden((prev) => !prev)
	}

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
								type={isPasswordHidden ? 'password' : 'text'}
								{...field}
							/>
						</FormControl>
						<FormLabel className="jc-inputLabel">
							{label} <span className="text-jc-blue">*</span>
						</FormLabel>
						<FormItem
							className="absolute right-5 top-[13px] cursor-pointer"
							onClick={handleShowPassword}
						>
							<ReactSVG
								src="/assets/icons/visibility-off.svg"
								width={20}
								height={14}
							/>
						</FormItem>
					</FormItem>
					<FormMessage className="text-xs ml-3" />
				</FormItem>
			)}
		/>
	)
}
