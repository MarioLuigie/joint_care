'use client'
//modules
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from '@/components/ui/accordion'
import { useState } from 'react'
//components
import Group from '@/components/shared/containers/Group'
import Icon from '@/components/shared/common/Icon'

const CollapseInput = ({
	titleIcon,
	title,
	children,
}: {
	titleIcon: string
	title: string
	children: React.ReactNode
}) => {
	const [isCollapse, setIsCollapse] = useState<boolean>(false)

	return (
		<Accordion
			type="single"
			collapsible
			className="border-2 border-jc-gray9 rounded-lg"
		>
			<AccordionItem value="item-1" className="border-0">
				<AccordionTrigger
					onClick={() => {
						setIsCollapse((prev) => !prev)
					}}
					className="p-3 hover:no-underline"
				>
					<div className="flex-center gap-3">
						<Icon path={titleIcon} />
						<p className="text-lg text-jc-gray5">
							{title}
						</p>
					</div>
				</AccordionTrigger>
				<AccordionContent className="flex flex-col gap-1 border-t-2 border-jc-gray9 p-3">
					{children}
				</AccordionContent>
			</AccordionItem>
		</Accordion>
	)
}

export default function CollapseInputs() {
	return (
		<Group className="flex flex-col gap-5 w-full h-full">
			{/* VAS */}
			<CollapseInput
				titleIcon={'/assets/icons/hand-pain.svg'}
				title="Dłoń lewa i prawa LSO:2"
			>
				<div className="flex-center gap-12">
					<div>
						<Icon path="/assets/icons/hand-left.svg" />
					</div>
					<div>
						<Icon path="/assets/icons/hand-right.svg" />
					</div>
				</div>
			</CollapseInput>
			<CollapseInput
				titleIcon={'/assets/icons/elbow-pain.svg'}
				title="Łokieć lewy i prawy LSO:1"
			>
				<div className="flex-center gap-16">
					<div>
						<Icon path="/assets/icons/elbow-left.svg" />
					</div>
					<div>
						<Icon path="/assets/icons/elbow-right.svg" />
					</div>
				</div>
			</CollapseInput>
			<CollapseInput
				titleIcon={'/assets/icons/shoulder-pain.svg'}
				title="Bark lewy i prawy"
			>
				<div className="flex-center gap-24">
					<div>
						<Icon path="/assets/icons/shoulder-left.svg" />
					</div>
					<div>
						<Icon path="/assets/icons/shoulder-right.svg" />
					</div>
				</div>
			</CollapseInput>
			<CollapseInput
				titleIcon={'/assets/icons/knee-pain.svg'}
				title="Kolano lewe i prawe"
			>
				<div className="flex-center">
					<div>
						<Icon path="/assets/icons/knee-both.svg" />
					</div>
				</div>
			</CollapseInput>
			<CollapseInput
				titleIcon={'/assets/icons/head-pain.svg'}
				title="Staw skroniowo-żuchwowy prawy i lewy"
			>
				<div className="flex-center gap-24">
					<div>
						<Icon path="/assets/icons/head-left.svg" />
					</div>
					<div>
						<Icon path="/assets/icons/head-right.svg" />
					</div>
				</div>
			</CollapseInput>
			<CollapseInput
				titleIcon={'/assets/icons/neck-pain.svg'}
				title="Kręgosłup szyjny"
			>
				<div className="flex-center">
					<div>
						<Icon path="/assets/icons/neck.svg" />
					</div>
				</div>
			</CollapseInput>
			<CollapseInput
				titleIcon={'/assets/icons/foot-pain.svg'}
				title="Stopa lewa i prawa"
			>
				<div className="flex-center gap-24">
					<div>
						<Icon path="/assets/icons/foot-left.svg" />
					</div>
					<div>
						<Icon path="/assets/icons/foot-right.svg" />
					</div>
				</div>
			</CollapseInput>
		</Group>
	)
}
