//modules
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { ReactSVG } from 'react-svg'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
//components
import LinkNav from '@/components/shared/common/LinkNav'
import UserName from '@/components/shared/common/UserName'
//lib
import { apiLogoutUser } from '@/lib/services/auth'
import { routes } from '@/lib/constants'
import { topbar } from '@/lib/constants/layout'
import { useAppContext } from '@/lib/context'

export default function Topbar() {
	const [isActive, setIsActive] = useState<boolean>(false)
	const { token, userData, setToken } = useAppContext()
	const router = useRouter()

	const handleLogout = async () => {

		// console.log(token);
		
		if (token) {
			try {
				const data = await apiLogoutUser(token)

				if (data.success) {
					router.push(routes.AUTH_LOGIN)
					localStorage.removeItem('token')
					setToken(null)
				}

				// console.log('Logout:', data)
			} catch (err: any) {
				console.error('There was a problem with authorization:', err)
			}
		}
	}

	const handleClick = () => {
		setIsActive((prev) => !prev)
	}

	const LogoutButton = () => (
		<div className="hover:bg-slate-100 rounded-lg w-full transition-all">
			<button
				className="flex-start gap-4 text-jc-gray8 hover:text-jc-blue transition-all rounded-lg p-2 text-sm"
				onClick={handleLogout}
			>
				<ReactSVG src={'/assets/icons/logout.svg'} className="w-[25px]" />
				<p>Wyloguj się</p>
			</button>
		</div>
	)

	return (
		<div className="flex-center gap-8">
			<div>
				<div className="flex-center relative p-4">
					<ReactSVG src="/assets/icons/notification.svg" />
					<div className="flex-center absolute top-0 right-0 w-[17px] aspect-h-1 rounded-full bg-jc-blue text-white text-xs">
						3
					</div>
				</div>
			</div>
			<div className="relative">
				<DropdownMenu open={isActive} onOpenChange={handleClick}>
					<DropdownMenuTrigger
						className={`w-jc_topbar h-jc_topbar p-2 rounded-tl-[28px] rounded-bl-[28px] rounded-tr-[15px] rounded-br-[15px] focus:outline-none bg-jc-bg flex-start`}
					>
						<UserName userData={userData}/>
					</DropdownMenuTrigger>
					<DropdownMenuContent
						className={`absolute top-[-59px] left-jc_topbar w-jc_topbar rounded-[15px] rounded-tl-[28px] p-2 shadow-2xl border-none focus:outline-none outline-none transition-none`}
					>
						<div
							className={`h-jc_topbar w-full cursor-pointer`}
							onClick={handleClick}
						>
							<UserName userData={userData}/>
						</div>
						<div className="p-0 pb-4 flex flex-col gap-4">
							{topbar.map((item) => (
								<DropdownMenuItem key={item.id} className="rounded-lg">
									<LinkNav item={item} />
								</DropdownMenuItem>
							))}
							<LogoutButton />
						</div>
					</DropdownMenuContent>
				</DropdownMenu>
			</div>
		</div>
	)
}
