interface IProps {
	label: React.ReactNode
	id: string
	name: string
	checked: boolean
	handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export default function InputCheckbox({
	id,
	name,
	label,
	checked,
	handleChange,
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
					onChange={handleChange}
				/>
				<label htmlFor={id}>{label}</label>
			</div>
		</>
	)
}
