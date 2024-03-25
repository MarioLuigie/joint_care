import React from 'react'

import Errors from '@/components/shared/Errors'

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

	console.log("***", errors);
	console.log("$$$", isError);

	return (
		<>
			<div className="flex flex-col justify-center items-stretch relative">
				<input
					name={name}
					type={type}
					value={value}
					placeholder={placeholder}
					className={isError && errors.every(err => err !== "") ? 'jc-input-err' : 'jc-input'}
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
