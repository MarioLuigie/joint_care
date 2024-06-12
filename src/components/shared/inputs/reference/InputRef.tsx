import { forwardRef } from 'react'

interface InputRefProps {
	type?: string
	placeholder: string
	label: string
	error: any
}

const InputRef = forwardRef<HTMLInputElement, InputRefProps>(
	({ label, error, ...rest }, ref) => {
		// console.log("AAA",error)
		return (
			<>
				<div className="flex flex-col justify-center items-stretch relative">
					<input
						{...rest}
						ref={ref}
						className={`jc-input ${
							error ? 'border-jc-red' : 'border-slate-300'
						}`}
					/>
					<p className="jc-inputLabel">
						{label}
						<span className="text-jc-blue">*</span>
					</p>
				</div>
				{error && <div className="text-red text-xs ml-3">{error.message}</div>}
			</>
		)
	}
)

InputRef.displayName = 'InputRef'
export default InputRef
