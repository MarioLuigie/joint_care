import Image from 'next/image'

import closeIcon from '/public/assets/icons/close-red.svg'

const reqs = [
	'Minimum 8 znaków',
	'Duże i małe litery',
	'Minimum jedną cyfrę',
	'Znak specjalny (np. !, &, *, $, itd)',
]

const Req = ({ req }: { req: string }) => (
	<div className="flex gap-2 text-base font-normal pb-3 text-[#747678]">
		<Image src={closeIcon} alt="Ikona close" />
		<p>{req}</p>
	</div>
)

export default function PasswordReqs() {
	return (
		<div>
			<p className="pt-4 pb-2 text-sm font-semibold">
				Silne hasło powinno zawierać:
			</p>
			{reqs.map((req, i) => (
				<Req key={i} req={req} />
			))}
		</div>
	)
}
