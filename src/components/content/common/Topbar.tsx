import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import { topbar } from '@/lib/constants/topbar'
import LinkNav from '@/components/shared/LinkNav'
import UserName from '@/components/shared/UserName'

export default function Topbar() {
	return (
		<DropdownMenu>
			<DropdownMenuTrigger className="w-[230px] h-[56px] p-2 rounded-tl-[28px] rounded-bl-[28px] rounded-tr-[15px] rounded-br-[15px] focus:outline-none bg-[#F5F8FC] flex-start">
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
	)
}
