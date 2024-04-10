import Sidebar from "@/components/layout/main/Sidebar"
import ChangePassword from "@/components/content/profil/change-password/ChangePassword"

export default function ChangePasswordPage() {

  return (
    <div className='flex gap-6 w-full'>
      <div>
        <Sidebar />
      </div>
      <ChangePassword />
    </div>
  )
}