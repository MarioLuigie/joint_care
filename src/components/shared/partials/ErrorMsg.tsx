import { Validator } from '@/lib/types'

interface ErrorMsgProps {
	isClientError: boolean
	validators: Validator[]
}

export default function ErrorMsg({ isClientError, validators }: ErrorMsgProps) {
	if (isClientError) {
		return (
			<>
				{validators.map((error, i) => {
					if (!error.error) {
						return (
							<div key={i} className="text-red text-xs ml-3">
								{error.msg}
							</div>
						)
					}
				})}
			</>
		)
	} else {
		return null
	}
}
