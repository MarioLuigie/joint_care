'use client'
import { Button } from '@/components/ui/button'
import { routes } from '@/lib/constants'
import { useRouter } from 'next/navigation'
import { apiLogoutUser } from '@/lib/api/auth-api'
import { useAppContext } from '@/context'
import { useDispatch } from 'react-redux'
import { logoutUser } from '@/redux/slices/authSlice'

export default function Dashboard() {

	const router = useRouter()
	const { user }: any = useAppContext()
	const dispatch = useDispatch()

	const handleLogout = async () => {
		try {
			const data = await apiLogoutUser(user.data.token)

			if(data.success) {
				router.push(routes.LOGIN)
				
				dispatch(logoutUser(true))
			}

			console.log('Logout:', data)
		} catch (err: any) {
			console.error("There was a problem with authorization:", err)
		}
	}

	return (
		<div className='flex gap-5'>
			<p className="text-black text-2xl">DASHBOARD</p>
			<p className="text-black text-2xl">|</p>
			<div>
				<p>{user?.data?.user?.name}</p>
				<p>{user?.data?.user?.email}</p>
				<p>{user?.message}</p>
			</div>
			<p className="text-black text-2xl">|</p>
			<Button onClick={handleLogout} className='pl-7 pr-7'>Logout</Button>
		</div>
	)
}
