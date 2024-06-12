'use client'
import { routes } from '@/lib/constants'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export default function QuestPage() {
	const router = useRouter()

	useEffect(() => {
		router.push(`${routes.QUEST}/1`)
	}, [router])
	return <div className="w-[720px]">Ładowanie danych...</div>
}
