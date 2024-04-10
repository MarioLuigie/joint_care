import { forwardRef } from 'react'

interface InputCheckboxProps {
	label: React.ReactNode
	error: any
	id: string
}

const InputCheckboxRef = forwardRef<HTMLInputElement, InputCheckboxProps>(
	({ label, error, id, ...rest }, ref) => {
		return (
			<>
				<div className="flex items-center space-x-2">
					<input
						type="checkbox"
						className="w-4 h-4"
						id={id}
						ref={ref}
						{...rest}
					/>
					<label htmlFor={id}>{label}</label>
				</div>
				{error && (
					<div className="text-red text-xs ml-3 pt-2">{error.message}</div>
				)}
			</>
		)
	}
)

InputCheckboxRef.displayName = 'InputCheckboxRef'
export default InputCheckboxRef
