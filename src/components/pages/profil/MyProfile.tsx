//components
import MyProfileForm from '@/components/forms/profile/MyProfileForm'
import CollapseReq from '@/components/shared/common/CollapseReq'

export default function MyProfile() {
	return (
		<div className="flex flex-col items-center justify-start p-8 rounded-[25px] w-full bg-white">
			<div className="flex flex-col gap-6 w-[400px] p-2">
				<p className="text-3xl font-bold">Twój profil</p>
				<div className="flex gap-4">
					<div className="rounded-lg border-2 border-dashed border-slate-200 aspect-square h-[150px]"></div>
					<CollapseReq minRes='3000' maxWeight='10' ext='JPEG, PNG'/>
				</div>
				<p className="text-base font-semibold">Twoje dane</p>
				<MyProfileForm />
			</div>
		</div>
	)
}
