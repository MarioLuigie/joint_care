import Languages from './Languages'
import Socials from './Socials'

const Copyrights = () => (
	<p className="leading-[18.25px] text-xs text-jc-text4">
		Copyright © 2024 Joint Care, Wszystkie prawa zastrzeżone.
	</p>
)

export default function Footer() {
	return (
		<footer className="flex-between p-3 bg-jc-bg sticky bottom-0 left-0">
			<div className="flex-center gap-5">
				<Languages />
				<Copyrights />
			</div>
			<div className="flex-center pr-5">
				<Socials />
			</div>
		</footer>
	)
}
