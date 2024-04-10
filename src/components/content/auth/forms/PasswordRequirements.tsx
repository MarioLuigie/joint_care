import Image from 'next/image'
import closeIcon from '/public/assets/icons/close-red.svg'
import checkIcon from '/public/assets/icons/check.svg'
import { msg } from '@/lib/constants'

export default function PasswordRequirements({
	password,
}: {
	password: string
}) {
	const prepareMsg = (msg: string) => msg.replace('Hasło powinno zawierać', '')

	const requirements = [
		{
			msg: prepareMsg(msg.PASSWORD_LETTER_SIZE),
			isOK: /[a-z]/.test(password) && /[A-Z]/.test(password),
		},
		{ msg: prepareMsg(msg.PASSWORD_DIGIT), 
			isOK: /\d/.test(password) },
		{
			msg: prepareMsg(msg.PASSWORD_SPECIAL_CHAR),
			isOK: /[^A-Za-z0-9]/.test(password),
		},
		{ msg: prepareMsg(msg.PASSWORD_LENGTH), 
			isOK: password.length >= 8 },
	]

	return (
		<div>
			<p className="pt-1 pb-2 text-sm font-semibold">
				Silne hasło powinno zawierać:
			</p>
			{requirements.map((item, i) => (
				<div className="flex gap-2 text-base font-normal pb-3 text-jc-text4">
					<Image
						src={item.isOK ? checkIcon : closeIcon}
						alt={
							item.isOK
								? 'Ikona poprawnie wpisanej wartości'
								: 'Ikona błędnie wpisanej wartości'
						}
					/>
					<p>{item.msg}</p>
				</div>
			))}
		</div>
	)
}
