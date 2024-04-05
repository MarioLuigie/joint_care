'use client'
import Navbar from '@/components/content/common/Navbar'
import Topbar from '@/components/content/common/Topbar'
import { ReactSVG } from 'react-svg'

export default function Header() {
	return (
		<header className="flex-between pl-[30px] pr-[30px] h-[80px] bg-white">
			<ReactSVG
				src="/assets/logo/jointCare-logo-min.svg"
				aria-label="Logo Joint Care"
			/>
			<Navbar />
			<Topbar />
		</header>
	)
}