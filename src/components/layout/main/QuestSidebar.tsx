'use client'
//modules
import Link from 'next/link'
import { useParams, useRouter } from 'next/navigation'
import { useState, useEffect, MouseEventHandler } from 'react'
//components
import { Button } from '@/components/ui/button'
import { Progress } from '@/components/ui/progress'
import Group from '@/components/shared/containers/Group'
import Paper from '@/components/shared/containers/Paper'
import Icon from '@/components/shared/common/Icon'
//lib
import { questSections } from '@/lib/constants/layout'
import { routes } from '@/lib/constants'

// ProgressBar
const ProgressBar = ({ currentItem }: { currentItem: number }) => {
	const currentProgress = currentItem * 10
	const progressCircleDiameter = 12
	const progressHeight = 4
	return (
		<div className="h-[100px] flex flex-col justify-between">
			<div className="font-bold mb-6">Jest już prawie gotowe</div>
			<div className="relative">
				<Progress
					style={{ height: `${progressHeight}px` }}
					value={currentProgress}
				/>
				<div
					className={`absolute rounded-full border-[3px] border-black bg-white transition-all flex-center`}
					style={{
						width: `${progressCircleDiameter}px`,
						height: `${progressCircleDiameter}px`,
						left: `calc(${currentProgress}% - ${progressCircleDiameter / 2}px`,
						bottom: `-${(progressCircleDiameter - progressHeight) / 2}px`,
					}}
				>
					<span
						className="absolute font-bold"
						style={{ bottom: `${progressCircleDiameter - 4}px` }}
					>
						{currentProgress}%
					</span>
				</div>
			</div>
			<div className="flex justify-between text-gray-400">
				<span>0%</span>
				<span>100%</span>
			</div>
		</div>
	)
}

// SidebarItem
const SidebarItem = ({
	item,
	currentItem,
}: {
	item: any
	currentItem: number
}) => {
	const isItemDone = item.id < currentItem
	const isItemActive = item.id === currentItem

	return (
		<Link href={`${routes.QUEST}/${item.id}`} className="cursor-pointer">
			<div className="flex gap-5 whitespace-nowrap">
				{isItemDone ? (
					<div
						className={`flex-center bg-jc-blue2 rounded-full w-7 aspect-square text-sm`}
					>
						<Icon path="/assets/icons/check.svg" />
					</div>
				) : isItemActive ? (
					<div
						className={`flex-center bg-jc-blue text-white rounded-full w-7 aspect-square text-sm`}
					>
						<p>{item.id}</p>
					</div>
				) : (
					<div
						className={`flex-center border-2 border-jc-gray6 text-jc-gray6 rounded-full w-7 aspect-square text-sm`}
					>
						<p>{item.id}</p>
					</div>
				)}

				<p
					className={`text-lg ${
						isItemActive ? 'font-bold text-black' : 'text-jc-gray6'
					}`}
				>
					{item.label}
				</p>
			</div>
		</Link>
	)
}

// SidebarItems
const SidebarItems = ({ currentItem }: { currentItem: number }) => {
	return (
		<div className="flex flex-col gap-5">
			{Object.values(questSections).map((value, i) => (
				<SidebarItem item={value} key={i} currentItem={currentItem} />
			))}
		</div>
	)
}

// Buttons
const Buttons = ({
	handleClick,
	currentItem,
}: {
	handleClick: (step: number) => MouseEventHandler<HTMLElement>
	currentItem: number
}) => (
	<div className="flex flex-col gap-1">
		<Button onClick={handleClick(1)} disabled={currentItem > 9}>
			Następny krok
		</Button>
		{currentItem > 1 && (
			<p
				onClick={handleClick(-1)}
				className="flex-center underline cursor-pointer"
			>
				Wróć
			</p>
		)}
	</div>
)

// QuestSidebar
export default function QuestSidebar() {
	const params = useParams()
	const router = useRouter()
	const slug = Number(params.slug)
	const [currentItem, setCurrentItem] = useState<number>(slug || 1)

	useEffect(() => {
		setCurrentItem(slug)
	}, [slug])

	const handleClick = (step: number) => () => {
		const newCurrentItem = currentItem + step
		router.push(`${routes.QUEST}/${newCurrentItem}`)
	}

	return (
		<div className="flex flex-col gap-5 min-w-[350px] sticky top-[112px]">
			<Paper>
				<ProgressBar currentItem={currentItem} />
			</Paper>
			<Paper className="flex flex-col gap-8 pt-10">
				<SidebarItems currentItem={currentItem} />
				<Buttons currentItem={currentItem} handleClick={handleClick} />
			</Paper>
		</div>
	)
}
