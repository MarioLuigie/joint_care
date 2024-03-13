import Image from 'next/image'
import Link from "next/link"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"


import { socials, Socials, languages, Languages } from '@/lib/constants/icons'
import { copyright } from '@/lib/constants/texts'


export default function Footer() {

  return (
    <footer className="p-3 bg-jc-bg text-black flex-between">
      <div className='flex items-center gap-8'>

        {/* languages */}
        <div>
          <Select>
            <SelectTrigger className="bg-white w-[65px] rounded-full border-none focus:border-none">
              <SelectValue placeholder="T" />
            </SelectTrigger>
            <SelectContent>
              {languages.map((language: Languages) => (
                <SelectItem value={language.value}>
                  <Image 
                    src={language.src} 
                    alt={language.alt} 
                    width={language.width} 
                    height={language.height}  
                  />
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Copyrights */}
        <div className='flex space-x-1 text-xs text-gray-7'>
          <p>{copyright}</p>
        </div>
      </div>

      {/* Socials */}
      <div className='flex-center gap-2'>
        {socials.map((social: Socials) => (
          <Link href={social.href}>
            <Image 
              src={social.src} 
              alt={social.alt} 
              width={27} 
              height={27}
              aria-label="Joint Care Logo"
            />
          </Link>
        ))}
        </div>
    </footer>
  )
}