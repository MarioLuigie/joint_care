import { navbar } from '@/lib/constants/layout'
import LinkNav from '@/components/shared/common/LinkNav'

export default function Navbar() {
	return (
		<ul className="flex gap-9 flex-wrap">
			{navbar.map((item, index) => (
				<li key={index} className="shrink-1">
					<LinkNav item={item} />
				</li>
			))}
		</ul>
	)
}
