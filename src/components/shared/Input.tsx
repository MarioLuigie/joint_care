import React from 'react'

import ErrorMsg from './partials/ErrorMsg'
import { Validator } from '@/lib/types'

interface InputProps {
	value: string
	validators: Validator[]
	name: string
	type: string
	placeholder: string
	label: string
	isError: boolean
	handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export default function Input({
	value,
	validators,
	name,
	type,
	placeholder,
	label,
	isError: isClientError,
	handleChange,
}: InputProps) {

	console.log("***", validators.length, validators);
	return (
		<>
			<div className="flex flex-col justify-center items-stretch relative">
				<input
					name={name}
					type={type}
					value={value}
					placeholder={placeholder}
					className={isClientError && validators.some(a => a.error === false) ? `jc-input-err` : 'jc-input'}
					onChange={handleChange}
				/>
				<p className="jc-inputLabel">
					{label}
					<span className="text-[#0092FD]">*</span>
				</p>
			</div>
			<ErrorMsg isClientError={isClientError} validators={validators} />
		</>
	)
}
