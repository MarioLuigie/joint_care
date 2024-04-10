'use client'
import { Button } from '@/components/ui/button'
import { routes } from '@/lib/constants'
import { useRouter } from 'next/navigation'
import { apiLogoutUser } from '@/lib/api/auth-api'
import { useAppContext } from '@/lib/context'

export default function Dashboard() {
	const router = useRouter()
	const { user } = useAppContext()

	const handleLogout = async () => {
		if (user !== null) {
			try {
				const data = await apiLogoutUser(user.token)

				if (data.success) {
					router.push(routes.AUTH_LOGIN)
					localStorage.removeItem('profile')
				}

				console.log('Logout:', data)
			} catch (err: any) {
				console.error('There was a problem with authorization:', err)
			}
		}
	}

	return (
		<div className="flex gap-5">
			<p className="text-black text-2xl">DASHBOARD</p>
			<p className="text-black text-2xl">|</p>
			<div>
				<p>{user?.user?.name}</p>
				<p>{user?.user?.email}</p>
			</div>
			<p className="text-black text-2xl">|</p>
			<Button onClick={handleLogout} className="pl-7 pr-7">
				Logout
			</Button>
		</div>
	)
}
