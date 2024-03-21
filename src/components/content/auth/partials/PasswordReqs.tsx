import Image from 'next/image'

import closeIcon from '/public/assets/icons/close-red.svg'
import checkIcon from '/public/assets/icons/check.svg'
import { IValidationErrors } from '@/lib/types'
import { errorMsg } from '@/lib/constants'

const reqs = {
	password_length: errorMsg.PASSWORD_LENGTH,
	password_letter_size: errorMsg.PASSWORD_LETTER_SIZE,
	password_special_chars: errorMsg.PASSWORD_SPECIAL_CHARS,
	password_digit: errorMsg.PASSWORD_DIGIT,
}

const Req = ({ req, isError }: { req: string, isError: boolean }) => (
	<div className="flex gap-2 text-base font-normal pb-3 text-[#747678]">
		<Image src={ !isError ? closeIcon : checkIcon } alt={!isError ? "Ikona błędnie wpisanej wartości" : "Ikona poprawnie wpisanej wartości"} />
		<p>{req}</p>
	</div>
)

interface IPasswordReqs {
	validationErrors: IValidationErrors
}

export default function PasswordReqs({ validationErrors }: IPasswordReqs ) {

	return (
		<div>
			<p className="pt-1 pb-2 text-sm font-semibold">
				Silne hasło powinno zawierać:
			</p>
			{Object.entries(reqs).map(([key, value], i) => (
				<Req key={i} req={value} isError={validationErrors[key]} />
			))}
		</div>
	)
}

