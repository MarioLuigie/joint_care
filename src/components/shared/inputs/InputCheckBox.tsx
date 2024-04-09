import { Checkbox } from '@/components/ui/checkbox'
import { Label } from '@/components/ui/label'

interface IProps {
	label: React.ReactNode
	id: string
	name: string
	checked: boolean
	handleCheck: (name: string, id: string) => (isChecked: boolean) => void
}

export default function InputCheckbox({
	label,
	id,
	name,
	checked,
	handleCheck,
}: IProps) {
	return (
		<div className="flex items-center space-x-2 pb-2">
			<Checkbox
				id={id}
				name={name}
				checked={checked}
				onCheckedChange={handleCheck(name, id)}
			/>
			<Label htmlFor={id}>{label}</Label>
		</div>
	)
}
