import Languages from './partials/Languages'
import Copyrights from './partials/Copyrights'
import Socials from './partials/Socials'

export default function Footer() {
	return (
		<footer className="flex-between p-3 bg-jc-bg">
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
