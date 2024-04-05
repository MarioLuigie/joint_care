import Image from 'next/image'
import { useState, forwardRef } from 'react'
import visibilityOff from '/public/assets/icons/visibility-off.svg'

interface InputProps {
	placeholder: string
	label: string
	error: any
}

const InputRef = forwardRef<HTMLInputElement, InputProps>(
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
					<Image
						src={visibilityOff}
						width={20}
						height={14}
						alt="Ikona hasło ukryte"
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

export default InputRef
