import { forwardRef } from 'react'
import * as CheckboxPrimitive from '@radix-ui/react-checkbox'
import { Check } from 'lucide-react'
import { cn } from '@/lib/utils'

interface InputCheckboxProps {
	label: React.ReactNode
	error: any
	id: string
}

const InputCheckboxRef = forwardRef<HTMLInputElement, InputCheckboxProps>(
	({ label, error, id, ...rest }, ref) => {
		console.log(rest)

		return (
			<>
				<div className="flex items-center space-x-2">
					<input
						className="w-4 h-4"
						id={id}
						type="checkbox"
						{...rest}
						ref={ref}
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