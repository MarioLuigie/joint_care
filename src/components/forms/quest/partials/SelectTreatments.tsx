'use client'
//modules
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from '@/components/ui/accordion'
import { useState, useRef } from 'react'
//components
import { Input } from '@/components/ui/input'
import Icon from '@/components/shared/common/Icon'

const treatments = [
	{ label: 'Artroskopia', id: 'treat01', value: 'Artroskopia' },
	{ label: 'Jonofereza', id: 'treat02', value: 'Jonofereza' },
	{ label: 'Ultradźwięk', id: 'treat03', value: 'Ultradźwięk' },
	{ label: 'Krioterapia', id: 'treat04', value: 'Krioterapia' },
	{
		label: 'Prądy diadynamiczne',
		id: 'treat05',
		value: 'Prądy diadynamiczne',
	},
	{
		label: 'Pola elektromagnetyczne',
		id: 'treat06',
		value: 'Pola elektromagnetyczne',
	},
	{ label: 'Fala uderzeniowa', id: 'treat07', value: 'Fala uderzeniowa' },
	{ label: 'Lorem Ipsum', id: 'treat08', value: 'Lorem Ipsum1' },
	{ label: 'Lorem Ipsum', id: 'treat09', value: 'Lorem Ipsum2' },
	{ label: 'Lorem Ipsum', id: 'treat10', value: 'Lorem Ipsum3' },
	{ label: 'Lorem Ipsum', id: 'treat11', value: 'Lorem Ipsum4' },
]

export default function SelectTreatments() {
	const [selectedItem, setSelectedItem] = useState<string>('Wybierz z listy')
	const triggerRef = useRef<HTMLButtonElement>(null)

	return (
		<div className="pt-8">
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
							<p className="text-[13px] text-jc-gray5 text-left">
								Zabieg
							</p>
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
									onChange={() => {}}
								/>
								<div className="absolute pl-2 text-jc-text4">
									<Icon path="/assets/icons/search.svg" />
								</div>
							</div>
						</div>
						<div className="flex flex-col gap-2 max-h-[300px] overflow-auto">
							{treatments.map((treatment, i) => (
								<div
									className="transition-all hover:pl-4 rounded p-2 cursor-pointer text-base text-jc-text4 hover:bg-jc-bg hover:text-jc-blue hover:font-semibold"
									key={i}
									onClick={() => {
										setSelectedItem(treatment.value)
										if (triggerRef.current) {
											triggerRef.current.click()
										}
									}}
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
