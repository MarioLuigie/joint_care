import { navbar } from '@/lib/constants/navbar'
import LinkNav from '@/components/shared/common/LinkNav'

export default function Navbar() {
  return (
    <ul className='flex gap-9'>
      {navbar.map((item, index) => (
        <li key={index} className='shrink-0'>
          <LinkNav item={item}/>
        </li>
      ))}
    </ul>
  )
}
