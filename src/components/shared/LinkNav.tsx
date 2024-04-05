'use client'
import { ReactSVG } from 'react-svg'
import Link from 'next/link'

interface Item {
  label: string
  route: string
  icon: string
}

export default function LinkNav({ item }: { item: Item}) {

  return (
    <Link href={item.route} className='flex-center gap-4 cursor-pointer'>
      <ReactSVG src={item.icon} className='text-jc-gray8 hover:text-[#048AED]'/>
      <p className='text-jc-gray8'>{item.label}</p>
    </Link>
  )
}