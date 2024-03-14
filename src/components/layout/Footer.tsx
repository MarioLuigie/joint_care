import Languages from './footer/Languages'
import Copyrights from './footer/Copyrights'
import Socials from './footer/Socials'

export default function Footer() {

  return (
    <footer className="flex-between p-3 bg-jc-bg">
      <div className='flex-center gap-5'>
        <Languages />
        <Copyrights />
      </div>
      <div className='flex-center pr-5'>
        <Socials />
      </div>
    </footer>
  )
}