import Image from 'next/image'
import Link from 'next/link'

import { socials } from '@/lib/constants/icons'

export default function Socials() {
	return (
		<div className="flex-center gap-2">
			{socials.map((social) => (
				<Link
					href={social.href}
					aria-label={social.ariaLabel}
					target="_blank"
					rel="noopener noreferrer"
					style={{ width: `${social.width}px` }}
					key={social.alt}
				>
					<Image
						src={social.src}
						width={social.width}
						height={social.height}
						alt={social.alt}
					/>
				</Link>
			))}
		</div>
	)
}
