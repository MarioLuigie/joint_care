import Image from 'next/image'

export default function AuthHeader() {

  return (
    <header className="flex-center p-3 bg-white text-black">
      <Image 
        src="/assets/logo/jointCare-logo.svg" 
        width={100} 
        height={100} 
        alt="logo" 
        aria-label="Joint Care Logo"  
      />
    </header>
  )
}