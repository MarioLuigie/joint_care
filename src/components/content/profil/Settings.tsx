import Sidebar from '@/components/content/common/Sidebar'

export default function Settings() {

  return (
    <div className='flex gap-6'>
      <Sidebar />
      <div className="flex flex-col items-center justify-start p-8 rounded-[25px] w-full bg-white">
        <div className='flex flex-col gap-6 w-[360px] p-2'>
          <p className='text-3xl font-bold'>Ustawienia</p>
        </div>
      </div>
    </div>

  )
}