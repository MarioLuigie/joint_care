'use client'
import { ReactSVG } from 'react-svg'

interface UserName {
  name: string
  icon: string
  sentence?: string
}

export default function UserName({ item }: { item: UserName}) {

  return (
    <div className='flex-start gap-4'>
      <div className='rounded-full ring-white ring-4 p-1'>
        <ReactSVG src={item.icon} />
      </div>
      <div>
        {item.sentence && <p className='text-sm text-black text-semibold'>{item.sentence}</p>}
        <p className='text-sm text-black text-semibold'>{item.name}</p>
      </div>
    </div>
  )
}