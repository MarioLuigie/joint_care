import Sidebar from '@/components/content/common/Sidebar'

export default function Settings() {

  return (
    <div className='flex gap-6 w-full'>
      <div>
        <Sidebar />
      </div>
      <div className="flex flex-col items-center justify-start p-8 rounded-[25px] w-full bg-white">
        <div className='flex flex-col gap-6 w-[360px] p-2'>
          <p className='text-3xl font-bold'>Ustawienia</p>
        </div>
        <div>
          <div className='flex gap-6 border-2 border-slate-200 rounded-[15px] h-[77px]'>
            <p className='font-semibold text-base'>Czy chcesz włączyć powiadomienia?</p>
            <div>

            </div>
          </div>
        </div>
      </div>
    </div>

  )
}