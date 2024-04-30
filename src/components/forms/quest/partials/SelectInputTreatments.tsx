'use client'
//modules
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from '@/components/ui/accordion'
import { useState, useRef, useEffect } from 'react'
//components
import { Input } from '@/components/ui/input'
import Icon from '@/components/shared/common/Icon'
//lib
import { questTreatments } from '@/lib/constants/quest'
import { QuestTreatment } from '@/lib/types/quest'

export default function SelectTreatments({
	handleSetSelectedTreatment,
}: {
	handleSetSelectedTreatment: any
}) {
	const [filteredTreatments, setFilteredTreatments] = useState<QuestTreatment[]>(questTreatments)
	const [searchedItem, setSearchedItem] = useState<string>('')
	const [selectedItem, setSelectedItem] = useState<string>('Wybierz z listy')
	const triggerRef = useRef<HTMLButtonElement>(null)


	useEffect(() => {
		const filteredTreatments =	questTreatments.filter((treatment) => {
			const regex = new RegExp(searchedItem, 'i')
			return regex.test(treatment.value)
		})
		setFilteredTreatments(filteredTreatments)
	}, [searchedItem])

	const handleClick = (value: string) => () => {
		setSelectedItem(value)
		handleSetSelectedTreatment(value)
		if (triggerRef.current) {
			triggerRef.current.click()
		}
	}

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSearchedItem(e.target.value)
	}

	return (
		<div className="flex-grow">
			<Accordion
				className="border-2 border-jc-gray9 rounded-lg"
				type="single"
				collapsible
			>
				<AccordionItem value="item-1" className="border-0">
					<AccordionTrigger
						className="p-3 hover:no-underline h-[60px]"
						ref={triggerRef}
					>
						<div className="flex flex-col">
							<p className="text-[13px] text-jc-gray5 text-left">Zabieg</p>
							<p className="text-lg text-jc-text1 text-left min-h-[28px]">
								{selectedItem}
							</p>
						</div>
					</AccordionTrigger>
					<AccordionContent className="flex flex-col gap-1 border-t-2 border-jc-gray9 p-3">
						<div className="p-2">
							<div className="relative flex items-center">
								<Input
									className="pl-10"
									type="text"
									placeholder="Szukaj"
									onChange={handleChange}
									value={searchedItem}
								/>
								<div className="absolute pl-2 text-jc-text4">
									<Icon path="/assets/icons/search.svg" />
								</div>
							</div>
						</div>
						<div className="flex flex-col gap-2 max-h-[300px] overflow-auto">
							{filteredTreatments.map((treatment) => (
								<div
									className="transition-all hover:pl-4 rounded p-2 cursor-pointer text-base text-jc-text4 hover:bg-jc-bg hover:text-jc-blue hover:font-semibold"
									onClick={handleClick(treatment.value)}
									key={treatment.id}
								>
									{treatment.label}
								</div>
							))}
						</div>
					</AccordionContent>
				</AccordionItem>
			</Accordion>
		</div>
	)
}
