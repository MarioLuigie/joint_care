'use client'

//modules
import { useForm } from 'react-hook-form'
import { useState } from 'react'
import { zodResolver } from '@hookform/resolvers/zod'
//components
import Group from '@/components/shared/containers/Group'
import Icon from '@/components/shared/common/Icon'
import ToggleButtons from '@/components/shared/common/ToggleButtons'
//lib
import { QuestFormData } from '@/lib/zod/quest'
import { questSchema } from '@/lib/zod/quest'
import { questSections } from '@/lib/constants/layout'
import InputShadcn from '@/components/shared/inputs/shadcn/InputShadcn'

const emojis = [
	{ path: '/assets/icons/emoji-00.svg', value: 0 },
	{ path: '/assets/icons/emoji-01.svg', value: 1 },
	{ path: '/assets/icons/emoji-02.svg', value: 2 },
	{ path: '/assets/icons/emoji-03.svg', value: 3 },
	{ path: '/assets/icons/emoji-04.svg', value: 4 },
	{ path: '/assets/icons/emoji-05.svg', value: 5 },
	{ path: '/assets/icons/emoji-06.svg', value: 6 },
	{ path: '/assets/icons/emoji-07.svg', value: 7 },
	{ path: '/assets/icons/emoji-08.svg', value: 8 },
	{ path: '/assets/icons/emoji-09.svg', value: 9 },
	{ path: '/assets/icons/emoji-10.svg', value: 10 },
]

const EmojiInput = () => {
	const [value, setValue] = useState<number | null>(null)

	const handleClick = (numb: number) => () => {
		setValue(numb)
	}

	return (
		<div className="flex justify-between bg-jc-bg rounded-lg h-[60px] px-2 py-2">
			{emojis.map((emoji, i) => (
				<div
					key={i}
					className={`flex-center gap-1 cursor-pointer px-3 ${
						value === emoji.value && 'bg-white rounded-[4px] h-full'
					}`}
					onClick={handleClick(emoji.value)}
				>
					<Icon path={emoji.path} />
					<p className="text-jc-text4">{i}</p>
				</div>
			))}
		</div>
	)
}

export default function BasicDatas() {
	const form = useForm<QuestFormData>({
		resolver: zodResolver(questSchema),
		defaultValues: {
			name: '',
		},
	})

	return (
		<Group className="flex flex-col gap-[3px] w-full h-full">
			<div className="flex flex-col gap-6 bg-white rounded-t-[25px] p-8">
				<p className="text-[26px] font-bold">
					{questSections.basicDatas.label}
				</p>
				<div className="flex flex-col gap-4">
					<p>Czy była sztywność poranna?</p>
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
			<div className="flex flex-col gap-6 bg-white p-8">
				<p className="font-semibold text-lg">VAS</p>
				<p className="text-jc-text4 text-sm">Wybierz stopień nasilenia</p>
				<EmojiInput />
			</div>
			{/* WAS PGA */}
			<div className="flex flex-col gap-6 bg-white p-8">
				<p className="font-semibold text-lg">WAS PGA</p>
				<p className="text-jc-text4 text-sm">Wybierz stopień nasilenia</p>
				<EmojiInput />
			</div>
			{/* Pomiar */}
			<div className="flex flex-col gap-6 bg-white p-8">
				<p className="font-semibold text-lg">Pomiar</p>
			</div>
		</Group>
	)
}
