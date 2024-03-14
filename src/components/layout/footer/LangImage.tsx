import Image from 'next/image'

import { Language } from "@/lib/types"

export default function LangImage ({ language }: {language: Language}) {
  return (    
    <div aria-label={language.ariaLabel}>
      <Image 
        src={language.src} 
        width={language.width} 
        height={language.height} 
        alt={language.alt} 
      />
    </div>
  )
}