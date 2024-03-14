import Image from 'next/image'

export default function AuthHeader() {

  return (
    <header className="flex-center h-[80px] bg-white">
      <Image 
        src="/assets/logo/jointCare-logo.svg" 
        width={163} 
        height={32} 
        alt="Joint Care Logo" 
        aria-label="Joint Care Logo"  
      />
    </header>
  )
}