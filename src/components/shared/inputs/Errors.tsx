interface ErrorsProps {
	isError: boolean
	errors: string[]
}

export default function Errors({ isError, errors }: ErrorsProps) {
	if (isError) {
		return (
			<>
				{errors.map((error, i) => {
					if (error != '') {
						return (
							<div key={i} className="text-red text-xs ml-3">
								{error}
							</div>
						)
					} else {
						return null
					}
				})}
			</>
		)
	} else {
		return null
	}
}
