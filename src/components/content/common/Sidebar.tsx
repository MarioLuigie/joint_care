import LinkNav from "@/components/shared/LinkNav"
import UserName from "@/components/shared/UserName"
import { topbar } from "@/lib/constants/top-sidebar"

export default function Sidebar() {

  return (
    <div className="w-[350px] bg-white rounded-[25px] pt-6 overflow-hidden">
      <div className="ml-4 h-[56px] p-2 rounded-tl-[28px] rounded-bl-[28px] rounded-tr-[15px] rounded-br-[15px] focus:outline-none bg-jc-bg w-full">
			  <UserName item={{name: 'Joanna Kowalska', icon: '/assets/icons/avatar.svg', sentence: 'Cześć,'}}/>
      </div>
      <div className="flex flex-col items-start gap-8 p-7">
        {
          topbar.map((item) => (
            <LinkNav item={item} key={item.id}/>
          ))
        }
      </div>
    </div>
  )
}