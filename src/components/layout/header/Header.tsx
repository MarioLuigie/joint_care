'use client'
//modules
import Link from 'next/link'
import { ReactSVG } from 'react-svg'
//components
import Navbar from '@/components/layout/header/Navbar'
import Topbar from '@/components/layout/header/Topbar'

export default function Header() {
	return (
		<header className="sticky top-0 left-0 flex-between gap-3 pl-[30px] pr-[30px] h-[80px] bg-white z-50">
			<Link href="/">
				<ReactSVG
					src="/assets/logo/jointCare-logo-min.svg"
					aria-label="Logo Joint Care"
				/>
			</Link>
			<Navbar />
			<Topbar />
		</header>
	)
}
