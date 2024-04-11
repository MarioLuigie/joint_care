'use client'

import React from 'react'
import Image from 'next/image'
import { useState } from 'react'

import visibilityOff from '/public/assets/icons/visibility-off.svg'
import Errors from './Errors'

interface InputPasswordProps {
	value: string
	errors: string[]
	name: string
	placeholder: string
	label: string
	isError: boolean
	handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export default function InputPassword({
	value,
	errors,
	name,
	placeholder,
	label,
	isError,
	handleChange,
}: InputPasswordProps) {
	const [isPasswordHidden, setIsPasswordHidden] = useState(true)

	const handleShowPassword = () => {
		setIsPasswordHidden((prev) => !prev)
	}

	return (
		<>
			<div className="flex flex-col justify-center items-stretch relative">
				<input
					name={name}
					type={isPasswordHidden ? 'password' : 'text'}
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
					<span className="text-jc-blue">*</span>
				</p>
				<div
					className="absolute right-5 cursor-pointer"
					onClick={handleShowPassword}
				>
					<Image
						src={visibilityOff}
						width={20}
						height={14}
						alt="Ikona hasło ukryte"
					/>
				</div>
			</div>
			<Errors isError={isError} errors={errors} />
		</>
	)
}
