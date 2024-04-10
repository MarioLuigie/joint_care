import { ReactSVG } from 'react-svg'

export default function PasswordReq({ password }: { password: string }) {
	const requirements = [
		{
			msg: 'duże i małe litery',
			isOK: /[A-Z]/.test(password) && /[a-z]/.test(password),
		},
		{ msg: 'minimum jedną cyfrę', 
			isOK: /\d/.test(password) },
		{
			msg: 'znak specjalny (np. !, &, $)',
			isOK: /[^A-Za-z0-9]/.test(password),
		},
		{ msg: 'minimum 8 znaków', 
			isOK: password?.length >= 8 },
	]

	return (
		<div className="flex flex-col gap-3">
			<div className="text-sm font-semibold">Silne hasło powinno zawierać:</div>
			{requirements.map((req, i) => (
				<div
					className="flex gap-2 font-normal text-base text-jc-text4"
					key={i}
				>
					<div className="flex-center w-2">
						<ReactSVG
							src={
								req.isOK
									? '/assets/icons/check.svg'
									: '/assets/icons/close-red.svg'
							}
						/>
					</div>
					<div>{req.msg}</div>
				</div>
			))}
		</div>
	)
}
0