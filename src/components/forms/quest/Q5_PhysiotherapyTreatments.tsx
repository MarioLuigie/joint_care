//components
import Group from '@/components/shared/containers/Group'
import Paper from '@/components/shared/containers/Paper'
import SelectTreatments from '@/components/forms/quest/partials/SelectTreatments'
//lib
import { questSections } from '@/lib/constants/quest'

export default function PhysiotherapyTreatments() {
	const treatments = [
		{name: "Artroskopia"}
	]

	return (
		<Paper className="w-full">
			<Group className="flex flex-col gap-[3px] w-full h-full">
				<div className="flex flex-col gap-6">
					<p className="text-[26px] font-bold">
						{questSections.physiotherapyTreatments.label}
					</p>
				</div>
				{treatments.map((treatment, i) => (
					<div key={i}>
						<SelectTreatments />
					</div>
				))}
			</Group>
		</Paper>
	)
}
