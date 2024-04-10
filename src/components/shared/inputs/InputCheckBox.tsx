interface IProps {
	label: React.ReactNode
	id: string
	name: string
	checked: boolean
	handleCheck: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export default function InputCheckbox({
	id,
	name,
	label,
	checked,
	handleCheck,
}: IProps) {
	return (
		<>
			<div className="flex items-center space-x-2 pb-2">
				<input
					id={id}
					name={name}
					type="checkbox"
					className="w-4 h-4"
					checked={checked}
					onChange={handleCheck}
				/>
				<label htmlFor={id}>{label}</label>
			</div>
		</>
	)
}
