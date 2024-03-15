'use client'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function HomePage() {
	const router = useRouter()
	useEffect(() => {
		router.push('/auth/login')
	}, [])

	return <div className="flex-center p-2">HOME PAGE</div>
}
