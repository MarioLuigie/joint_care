import React from 'react'

import Errors from '@/components/shared/inputs/basic/Errors'

interface InputProps {
	value: string
	errors: string[]
	name: string
	type: string
	placeholder: string
	label: string
	isError: boolean
	handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export default function Input({
	value,
	errors,
	name,
	type,
	placeholder,
	label,
	isError,
	handleChange,
}: InputProps) {
	return (
		<>
			<div className="flex flex-col justify-center items-stretch relative">
				<input
					name={name}
					type={type}
					value={value}
					placeholder={placeholder}
					className={`jc-input ${
						isError && errors.every((err) => err !== '')
							? 'border-jc-red'
							: 'border-slate-300'
					}`}
					onChange={handleChange}
				/>
				<p className="jc-inputLabel">
					{label}
					<span className="text-[#0092FD]">*</span>
				</p>
			</div>
			<Errors isError={isError} errors={errors} />
		</>
	)
}
