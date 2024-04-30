'use client'
//modules
import { useState } from 'react'
//components
import Group from '@/components/shared/containers/Group'
import Paper from '@/components/shared/containers/Paper'
import SelectInputTreatments from '@/components/forms/quest/partials/SelectInputTreatments'
import RemoveButton from '@/components/forms/quest/partials/RemoveButton'
import AddIcon from '/public/assets/icons/add.svg'
//lib
import { questSections } from '@/lib/constants/quest'
import { Button } from '@/components/ui/button'
import Icon from '@/components/shared/common/Icon'

interface SelectedTreatment {
	name: string
	id: number
}

export default function PhysiotherapyTreatments() {
	const [currentID, setCurrentID] = useState<number>(1)
	const [selectedTreatments, setSelectedTreatments] = useState<
		Array<SelectedTreatment>
	>([{ name: '', id: 0 }])

	const handleAddTreatment = () => {
		setSelectedTreatments((prev) => [...prev, { name: '', id: currentID }])
		setCurrentID((prev) => prev + 1)
	}

	const handleUpdateTreatment = (id: number) => (name: string) => {
		setSelectedTreatments((prev) =>
			prev.map((treatment) =>
				treatment.id === id ? { ...treatment, name } : treatment
			)
		)
	}

	const handleRemoveTreatment = (id: number) => () => {
		setSelectedTreatments((prev) =>
			prev.filter((treatment) => treatment.id !== id)
		)
	}

	console.log('Selected Treatments:', selectedTreatments)

	return (
		<Paper className="w-full">
			<Group className="flex flex-col gap-5 w-full h-full">
				<div className="flex flex-col">
					<p className="text-[26px] font-bold">
						{questSections.physiotherapyTreatments.label}
					</p>
				</div>
				<div className="flex flex-col gap-5 pt-12">
					{selectedTreatments.map((treatment) => (
						<div key={treatment.id} className="flex items-center gap-5">
							<SelectInputTreatments
								handleSetSelectedTreatment={handleUpdateTreatment(
									treatment.id
								)}
							/>
							<RemoveButton
								handleRemove={handleRemoveTreatment(treatment.id)}
							/>
						</div>
					))}
				</div>
				<div className="pt-6">
					<Button
						onClick={handleAddTreatment}
						className="h-10 bg-jc-bg text-jc-text4 text-sm font-semibold px-3 py-0 rounded-2xl hover:bg-jc-bg"
					>
						<div className="flex-center gap-2">
							<Icon path={AddIcon.src} />
							Dodaj zabieg
						</div>
					</Button>
				</div>
			</Group>
		</Paper>
	)
}
