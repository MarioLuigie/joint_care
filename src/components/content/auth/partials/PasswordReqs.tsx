import Image from 'next/image'

import closeIcon from '/public/assets/icons/close-red.svg'
import checkIcon from '/public/assets/icons/check.svg'
import { IValidationErrors } from '@/lib/types'
import { validationErrors as v } from "@/lib/constants/"

const reqs = {
	[v.PASSWORD_LENGTH]: 'Minimum 8 znaków',
	[v.LETTER_SIZE]: 'Duże i małe litery',
	[v.DIGIT]: 'Minimum jedną cyfrę',
	[v.SPECIAL_CHARACTER]: 'Znak specjalny (np. !, &, *, $, itd)',
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
			<p className="pt-4 pb-2 text-sm font-semibold">
				Silne hasło powinno zawierać:
			</p>
			{Object.entries(reqs).map(([key, value], i) => (
				<Req key={i} req={value} isError={validationErrors[key]} />
			))}
		</div>
	)
}

