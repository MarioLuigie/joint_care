"use client"

//components
import LinkNav from '@/components/shared/common/LinkNav'
import UserName from '@/components/shared/common/UserName'
//lib
import { topbar } from '@/lib/constants/layout'
import { useAppContext } from '@/lib/context'

export default function Sidebar() {

	const { userData } = useAppContext()

	return (
		<div className="w-[350px] bg-white rounded-[25px] pt-6 sticky top-[112px]">
			<div className="ml-4 h-[56px] p-2 rounded-tl-[28px] rounded-bl-[28px] rounded-tr-[15px] rounded-br-[15px] focus:outline-none bg-jc-bg w-full">
				<UserName userData={userData} sentence='Cześć'/>
			</div>
			<div className="flex flex-col items-start gap-8 p-7">
				{topbar.map((item) => (
					<LinkNav item={item} key={item.id} />
				))}
			</div>
		</div>
	)
}
