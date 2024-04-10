'use client'
import { ReactSVG } from 'react-svg'
import { socials } from '@/lib/constants/layout'

export default function Socials() {
	return (
		<div className="flex-center gap-2">
			{socials.map((social) => (
				<a
					href={social.href}
					aria-label={social.alt}
					target="_blank"
					rel="noopener noreferrer"
					style={{ width: `${social.size}px` }}
					key={social.alt}
				>
					<ReactSVG src={social.src} />
				</a>
			))}
		</div>
	)
}
