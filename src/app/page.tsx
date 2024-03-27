'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

import { routes } from '@/lib/constants'

export default function HomePage() {
	const router = useRouter()
	useEffect(() => {
		router.push(routes.LOGIN)
	}, [router])

	return <div className="flex-center p-2">HOME PAGE</div>
}
