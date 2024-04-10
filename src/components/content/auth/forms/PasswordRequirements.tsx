import Image from 'next/image'
import closeIcon from '/public/assets/icons/close-red.svg'
import checkIcon from '/public/assets/icons/check.svg'
import { msg } from '@/lib/constants'

interface RequierdProps {
	msg: string
	error: boolean
}
interface PasswordRequirementsProps {
	password: string
}

export default function PasswordRequirements({
	password,
}: PasswordRequirementsProps) {
	const passwordErrors = [
		{ msg: msg.PASSWORD_LETTER_SIZE, error: /[a-z]/.test(password) && /[A-Z]/.test(password)},
		{ msg: msg.PASSWORD_DIGIT, error: /\d/.test(password) },
		{ msg: msg.PASSWORD_SPECIAL_CHAR, error: /[^A-Za-z0-9]/.test(password) },
		{ msg: msg.PASSWORD_LENGTH, error: password.length >= 8 },
	]

	const Requirement = ({ msg, error }: RequierdProps) => (
		<div className="flex gap-2 text-base font-normal pb-3 text-[#747678]">
			<Image
				src={error ? checkIcon : closeIcon}
				alt={
					error
						? 'Ikona poprawnie wpisanej wartości'
						: 'Ikona błędnie wpisanej wartości'
				}
			/>
			<p>{msg}</p>
		</div>
	)

	return (
		<div>
			<p className="pt-1 pb-2 text-sm font-semibold">
				Silne hasło powinno zawierać:
			</p>
			{passwordErrors.map((item, i) => (
				<Requirement key={i} msg={item.msg.slice(22)} error={item.error} />
			))}
		</div>
	)
}
