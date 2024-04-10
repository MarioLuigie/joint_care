'use client'
import { Button } from '@/components/ui/button'
import { routes } from '@/lib/constants'
import Link from 'next/link'

export default function HomePage() {
	return (
		<div className="flex-center flex-col min-h-screen gap-3 bg-black">
			{Object.values(routes).map((route, i) => (
				<Link key={i} href={route}>
					<Button className="bg-gray-900 hover:bg-gray-800">{route}</Button>
				</Link>
			))}
		</div>
	)
}
