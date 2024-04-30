//components
import CollapseInputs from '@/components/forms/quest/partials/CollapseInputs'
import Group from '@/components/shared/containers/Group'
import Paper from '@/components/shared/containers/Paper'
//lib
import { questSections } from '@/lib/constants/quest'

export default function JointsPainfull() {
	return (
		<Paper className="w-full">
			<Group className="flex flex-col gap-5 w-full h-full">
				<div className="flex flex-col">
					<p className="text-[26px] font-bold">
						{questSections.jointsPainfull.label}
					</p>
				</div>
				<div className="pt-12">
					<CollapseInputs />
				</div>
			</Group>
		</Paper>
	)
}
