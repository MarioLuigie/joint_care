import Sidebar from "@/components/content/common/Sidebar"
import Settings from "@/components/content/profil/settings/Settings"

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