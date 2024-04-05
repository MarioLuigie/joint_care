'use client'
import { navbar } from '@/lib/constants/navbar';
import { ReactSVG } from 'react-svg';

export default function Navbar() {
  return (
    <ul className='flex gap-9'>
      {navbar.map((item, index) => (
        <li key={index} className='flex-center gap-4 cursor-pointer'>
          <ReactSVG src={item.icon} className='text-jc-gray8'/>
          <p className='text-jc-gray8'>{item.label}</p>
        </li>
      ))}
    </ul>
  );
}
