import Image from 'next/image'

import closeIcon from '/public/assets/icons/close-red.svg'
import checkIcon from '/public/assets/icons/check.svg'
import { Validator } from '@/lib/types'

const Req = ({ msg, error }: { msg: string, error: boolean }) => (
	<div className="flex gap-2 text-base font-normal pb-3 text-[#747678]">
		<Image src={ !error ? closeIcon : checkIcon } alt={!error ? "Ikona błędnie wpisanej wartości" : "Ikona poprawnie wpisanej wartości"} />
		<p>{msg.slice(22)}</p>
	</div>
)

interface PasswordReqsProps {
	validators: Validator[]
}

export default function PasswordReqs({ validators }: PasswordReqsProps ) {

	return (
		<div>
			<p className="pt-1 pb-2 text-sm font-semibold">
				Silne hasło powinno zawierać:
			</p>
			{validators.map((validator, i) => (
				<Req key={i} msg={validator.msg} error={validator.error} />
			))}
		</div>
	)
}

