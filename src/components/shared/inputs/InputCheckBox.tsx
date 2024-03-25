import { Checkbox } from '@/components/ui/checkbox'
import Errors from '@/components/shared/Errors'

interface InputCheckboxProps {
	children: React.ReactNode
	id: string
	name: string
	handleCheck: (isChecked: boolean) => void
	isError: boolean
	errors: string[]
}

export default function InputCheckbox({ 
	children, 
	id, 
	name, 
	handleCheck, 
	isError, 
	errors}: InputCheckboxProps) {
	
	return (
		<>
			<div className="flex items-center space-x-2">
				<Checkbox id={id} name={name} 
					onCheckedChange={handleCheck}
				/>
				{children}
			</div>
			<Errors isError={isError} errors={errors} />
		</>
	)
}


