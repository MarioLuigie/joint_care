'use client'
import Link from 'next/link'
import { ReactSVG } from 'react-svg'

export default function HeaderAuth() {
	return (
		<header className="sticky top-0 left-0 flex-center h-[80px] bg-white">
			<Link href="/">
				<ReactSVG
					src="/assets/logo/jointCare-logo.svg"
					aria-label="Logo Joint Care"
				/>
			</Link>
		</header>
	)
}
