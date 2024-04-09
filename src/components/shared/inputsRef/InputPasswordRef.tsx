'use client'
import { useState, forwardRef } from 'react'
import { ReactSVG } from 'react-svg'

interface IProps {
	placeholder: string
	label: string
	error: any
}

const InputPasswordRef = forwardRef<HTMLInputElement, IProps>(
	({ label, error, ...rest }, ref) => {

		const [isPasswordHidden, setIsPasswordHidden] = useState(true)

		const handleShowPassword = () => {
			setIsPasswordHidden((prev) => !prev)
		}

		return (
			<>
				<div className="flex flex-col justify-center items-stretch relative">
					<input
						{...rest}
						ref={ref}
						type={isPasswordHidden ? 'password' : 'text'}
						className={error ? 'jc-input-err' : 'jc-input'}
					/>
					<p className="jc-inputLabel">
						{label}
						<span className="text-[#0092FD]">*</span>
					</p>
					<div
					className="absolute right-5 cursor-pointer"
					onClick={handleShowPassword}
				>
					<ReactSVG
						src='/assets/icons/visibility-off.svg'
						width={20}
						height={14}
					/>
				</div>
				</div>
				{error && (
					<div className="text-red text-xs ml-3">
						{error.message}
					</div>
				)}
			</>
		)
	}
)

InputPasswordRef.displayName = 'InputPasswordRef'
export default InputPasswordRef
