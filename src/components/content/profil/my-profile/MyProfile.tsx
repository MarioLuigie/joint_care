import MyProfileFormRef from '@/components/content/profil/my-profile/MyProfileFormRef'
import Sidebar from '@/components/content/common/Sidebar'

export default function MyProfile() {

  return (
    <div className='flex gap-6 w-full'>
      <div>
        <Sidebar />
      </div>
      <div className="flex flex-col items-center justify-start p-8 rounded-[25px] w-full bg-white">
        <div className='flex flex-col gap-6 w-[400px] p-2'>
          <p className='text-3xl font-bold'>Twój profil</p>
          <div className='rounded-lg border-2 border-dashed border-slate-200 w-full h-[90px]'></div>
          <p className='text-base font-semibold'>Twoje dane</p>
          <MyProfileFormRef />
        </div>
      </div>
    </div>

  )
}