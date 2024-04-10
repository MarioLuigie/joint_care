'use client'
import { ReactSVG } from 'react-svg'

export default function HeaderAuth() {
	return (
		<header className="flex-center h-[80px] bg-white">
			<ReactSVG
				src="/assets/logo/jointCare-logo.svg"
				aria-label="Logo Joint Care"
			/>
		</header>
	)
}
