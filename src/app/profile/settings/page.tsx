import Sidebar from "@/components/layout/main/Sidebar"
import Settings from "@/components/pages/profil/Settings"

export default function SettingsPage() {
  return (
    <div className='flex gap-6 w-full'>
      <div>
        <Sidebar />
      </div>
      <Settings />
    </div>
  )
}