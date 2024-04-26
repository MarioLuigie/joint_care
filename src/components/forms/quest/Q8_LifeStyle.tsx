import ToggleButtons from '@/components/shared/common/ToggleButtons'
import Group from '@/components/shared/containers/Group'
import Paper from '@/components/shared/containers/Paper'
//lib
import { questSections } from '@/lib/constants/quest'

export default function LifeStyle() {

	return (
		<Paper className='w-full'>
			<Group className="flex flex-col gap-[3px] w-full h-full">
				<div className="flex flex-col gap-6">
					<p className="text-[26px] font-bold">{questSections.lifeStyle.label}</p>
					<div className="flex flex-col gap-4">
						<p>Suplementy diety</p>
						<div className="flex-center h-[60px] gap-2 p-1 bg-jc-gray0 rounded-[5px]">
							<ToggleButtons
								className="text-[15px] rounded-[4px]"
								activClassName="bg-white text-jc-blue"
								disactiveClassName="text-black bg-transparent"
							/>
						</div>
					</div>
				</div>
				{/* VAS */}
			</Group>
		</Paper>
	)
}