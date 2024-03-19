import Link from "next/link"

import { Children } from '@/lib/types'

export default function LinkNotif({ children }: Children) {

  return (
    <div className="flex-start gap-3 bg-[#F5F8FC] p-4 mb-2 rounded-lg border-2 border-[#D1E1F6] border-dashed">
      <div className="text-[14px] font-normal text-[#030303]">
        {children}
      </div>
    </div>
  )
}