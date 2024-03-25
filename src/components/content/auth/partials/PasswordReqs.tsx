import Image from 'next/image'
import closeIcon from '/public/assets/icons/close-red.svg'
import checkIcon from '/public/assets/icons/check.svg'
import { errorMsg } from '@/lib/constants'

interface ReqProps {
	msg: string
	error: boolean
}

interface PasswordReqsProps {
	errors: string[]
}

const Req = ({ msg, error }: ReqProps) => (
	<div className="flex gap-2 text-base font-normal pb-3 text-[#747678]">
		<Image
			src={error ? checkIcon : closeIcon}
			alt={error ? 'Ikona poprawnie wpisanej wartości'	: 'Ikona błędnie wpisanej wartości'}
		/>
		<p>{msg}</p>
	</div>
)

export default function PasswordReqs({ errors }: PasswordReqsProps) {

	const passwordErrors = [
		errorMsg.PASSWORD_LETTER_SIZE,
		errorMsg.PASSWORD_DIGIT,
		errorMsg.PASSWORD_SPECIAL_CHAR,
		errorMsg.PASSWORD_LENGTH,
	]

	return (
		<div>
			<p className="pt-1 pb-2 text-sm font-semibold">
				Silne hasło powinno zawierać:
			</p>
			{passwordErrors.map((error, i) => (
				<Req key={i} msg={error.slice(22)} error={!errors.includes(error)} />
			))}
		</div>
	)
}
