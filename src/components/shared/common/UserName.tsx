'use client'
import { UserData } from '@/lib/types'
//modules
import { ReactSVG } from 'react-svg'

export default function UserName({
	userData,
	sentence,
}: {
	userData: UserData | null
	sentence?: string
}) {
	return (
		<div className="flex-start gap-4">
			<div className="rounded-full ring-white ring-4 p-1">
				<ReactSVG src={userData?.avatar || '/assets/icons/avatar.svg'} />
			</div>
			<div>
				{sentence && (
					<p className="text-sm text-black text-semibold">
						{sentence}
					</p>
				)}
				<p className="text-sm text-black text-semibold">{userData?.name}</p>
			</div>
		</div>
	)
}
