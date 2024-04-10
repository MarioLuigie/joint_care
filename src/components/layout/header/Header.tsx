'use client'
import Navbar from '@/components/layout/header/Navbar'
import Topbar from '@/components/layout/header/Topbar'
import { ReactSVG } from 'react-svg'

export default function Header() {
	return (
		<header className="flex-between gap-3 pl-[30px] pr-[30px] h-[80px] bg-white">
			<ReactSVG
				src="/assets/logo/jointCare-logo-min.svg"
				aria-label="Logo Joint Care"
			/>
			<Navbar />
			<Topbar />
		</header>
	)
}