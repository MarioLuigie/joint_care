import Sidebar from '@/components/layout/main/Sidebar'
import MyProfile from '@/components/content/profil/my-profile/MyProfile'

export default function MyProfilePage() {
	return (
		<div className='flex gap-6 w-full'>
			<div>
        <Sidebar />
      </div>
			<MyProfile />
		</div>
	)
}