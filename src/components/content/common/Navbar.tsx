import { navbar } from '@/lib/constants/navbar'
import LinkNav from '@/components/shared/LinkNav'

export default function Navbar() {
  return (
    <ul className='flex gap-9'>
      {navbar.map((item, index) => (
        <li key={index}>
          <LinkNav item={item}/>
        </li>
      ))}
    </ul>
  )
}
