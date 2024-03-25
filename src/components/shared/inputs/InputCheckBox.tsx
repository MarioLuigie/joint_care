import { Checkbox } from '@/components/ui/checkbox'

interface CheckboxLabelProps {
	children: React.ReactNode
	id: string
}

export default function InputCheckbox({ children, id }: CheckboxLabelProps) {
	return (
		<div className="flex items-center space-x-2">
			<Checkbox id={id} />
			{children}
		</div>
	)
}
