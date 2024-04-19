'use client'
import { useAppContext } from '@/lib/context'

export default function Dashboard() {
	const { userData } = useAppContext()

	return (
		<div>
			<p className="text-black text-2xl">
				Witaj {userData?.name} {userData?.last_name}
			</p>
		</div>
	)
}
