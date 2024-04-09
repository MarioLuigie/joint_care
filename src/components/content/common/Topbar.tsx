import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ReactSVG } from 'react-svg'

import { topbar } from '@/lib/constants/top-sidebar'
import LinkNav from '@/components/shared/LinkNav'
import UserName from '@/components/shared/UserName'

export default function Topbar() {
	return (
		<div className='flex-center gap-8'>
			<div>
				<div className='flex-center relative p-4'>
					<ReactSVG src='/assets/icons/notification.svg' />
					<div className='flex-center absolute top-0 right-0 w-[17px] aspect-h-1 rounded-full bg-jc-blue text-white text-xs'>3</div>
				</div>
			</div>
			<DropdownMenu>
				<DropdownMenuTrigger className="w-[230px] h-[56px] p-2 rounded-tl-[28px] rounded-bl-[28px] rounded-tr-[15px] rounded-br-[15px] focus:outline-none bg-jc-bg flex-start">
					<UserName item={{name: 'Joanna Kowalska', icon: '/assets/icons/avatar.svg'}}/>
				</DropdownMenuTrigger>
				<DropdownMenuContent className="absolute top-[-59px] left-[-115px] w-[230px] rounded-[15px] rounded-tl-[28px] p-2 shadow-2xl border-none focus:outline-none outline-none transition-none">
					<div className="h-[56px]">
						<UserName item={{name: 'Joanna Kowalska', icon: '/assets/icons/avatar.svg'}}/>
					</div>
					<div className="p-0 pb-4 flex flex-col gap-4">
						{
							topbar.map((item) => (
								<DropdownMenuItem key={item.id} className="rounded-lg">
									<LinkNav item={item}/>
								</DropdownMenuItem>
							))
						}
					</div>
				</DropdownMenuContent>
			</DropdownMenu>
		</div>
	)
}
