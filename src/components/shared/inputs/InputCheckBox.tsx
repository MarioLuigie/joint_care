import { Checkbox } from '@/components/ui/checkbox'
import Errors from '@/components/shared/Errors'
import { Label } from '@/components/ui/label'

interface InputCheckboxProps {
	label: React.ReactNode
	id: string
	name: string
	checked: boolean
	handleCheck: (name: string, id: string) => (isChecked: boolean) => void
	isError: boolean
	errors: string[]
}

export default function InputCheckbox({
	label,
	id,
	name,
	checked,
	handleCheck,
	isError,
	errors,
}: InputCheckboxProps) {
	return (
		<>
			<div className="flex items-center space-x-2 pb-2">
				<Checkbox 
					id={id} 
					name={name} 
					checked={checked}
					onCheckedChange={handleCheck(name, id)}
				/>
				<Label htmlFor={id}>{label}</Label>
			</div>
			<div className="mt-3">
				<Errors isError={isError} errors={errors} />
			</div>
		</>
	)
}
