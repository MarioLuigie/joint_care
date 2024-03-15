import Image from 'next/image'

import closeErr from '/public/assets/icons/close-err.svg'

export default function IncorrectData() {
	return (
		<div className="flex-start gap-3 bg-[#FDF4F5] p-4 mb-2 rounded-lg">
			<div>
				<Image src={closeErr} alt="Ikona błędu wprowadzonych danych" />
			</div>
			<div className="text-sm text-[#E04F5F]">
				<p>Niepoprawne dane do logowania!</p>
				<p>Uzupełnij ponownie</p>
			</div>
		</div>
	)
}
