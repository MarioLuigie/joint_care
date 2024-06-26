import Group from '@/components/shared/containers/Group'
import Paper from '@/components/shared/containers/Paper'
//lib
import { questSections } from '@/lib/constants/quest'

export default function PhysicalActivity() {

	return (
		<Paper className='w-full'>
			<Group className="flex flex-col gap-[3px] w-full h-full">
				<div className="flex flex-col gap-6">
					<p className="text-[26px] font-bold">{questSections.physicalActivity.label}</p>
				</div>
				{/* VAS */}
			</Group>
		</Paper>
	)
}