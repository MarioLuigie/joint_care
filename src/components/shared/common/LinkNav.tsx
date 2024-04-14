'use client'
//modules
import { ReactSVG } from 'react-svg'
//components
import Link from 'next/link'

interface Item {
	label: string
	route: string
	icon: string
}

export default function LinkNav({ item }: { item: Item }) {
	return (
		<Link href={item.route}>
			<div className="flex-center gap-4 cursor-pointer text-jc-gray8 hover:text-jc-blue transition-all">
				<ReactSVG src={item.icon} className="w-[25px]" />
				<p className="whitespace-nowrap">{item.label}</p>
			</div>
		</Link>
	)
}
