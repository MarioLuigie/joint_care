import { forwardRef } from 'react'

interface InputProps {
	type: string
	placeholder: string
	label: string
	error: any
}

const InputRef = forwardRef<HTMLInputElement, InputProps>(
	({ type, placeholder, label, error, ...rest }, ref) => {
		return (
			<>
				<div className="flex flex-col justify-center items-stretch relative">
					<input
						{...rest}
						ref={ref}
						type={type}
						placeholder={placeholder}
						className={error ? 'jc-input-err' : 'jc-input'}
					/>
					<p className="jc-inputLabel">
						{label}
						<span className="text-[#0092FD]">*</span>
					</p>
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
