'use client'
//modules
import { useState, useEffect } from 'react'
//components
import { questSidebar } from '@/lib/constants/layout'
import Paper from '@/components/shared/containers/Paper'
import { Button } from '@/components/ui/button'
import Icon from '@/components/shared/common/Icon'
import { useRouter } from 'next/navigation'
//lib
import { routes } from '@/lib/constants'
import Group from '@/components/shared/containers/Group'

const Progress = () => {
	return (
		<div className='h-[100px]'>

		</div>
	)
}

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
	)
}

const Sidebar = ({ currentItem }: { currentItem: number }) => {
	return (
		<div className="flex flex-col gap-8">
			{questSidebar.map((item) => (
				<SidebarItem item={item} currentItem={currentItem} />
			))}
		</div>
	)
}

export default function QuestSidebar() {
	const [currentItem, setCurrentItem] = useState<number>(1)
	const router = useRouter()

	useEffect(() => {
		router.push(`${routes.QUEST}/${currentItem}`)
	}, [currentItem])

	const handleClick = (step: number) => () => {
		setCurrentItem((prev) => prev + step)
	}

	return (
		<div className="flex flex-col gap-5 min-w-[350px]">
			<Paper>
				<Progress />
			</Paper>
			<Paper className="flex flex-col gap-8 pt-10">
				<Sidebar currentItem={currentItem} />
				<Group gap="1">
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
				</Group>
			</Paper>
		</div>
	)
}
