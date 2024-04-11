import { Label } from '@/components/ui/label'
import { Checkbox } from '@/components/ui/checkbox'

interface InputCheckboxProps {
	id: string
	name: string
	label: React.ReactNode
	checked: boolean
	handleCheck: (isChecked: boolean) => void
}

export default function InputCheckbox({
	id,
	name,
	label,
	checked,
	handleCheck,
}: InputCheckboxProps) {
	return (
		<div className="flex items-center space-x-2 pb-2">
			<Checkbox
				id={id}
				name={name}
				checked={checked}
				onCheckedChange={handleCheck}
			/>
			<Label htmlFor={id}>{label}</Label>
		</div>
	)
}
