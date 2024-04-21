'use client'

//modules
import { useState } from 'react'

export default function ToggleButtons({ classes }: { classes?: string }) {
	const [isChecked, setIsChecked] = useState<boolean>(false)

	const handleSwitch = () => {
		setIsChecked((prev) => !prev)
	}

	const Button = ({
		children,
		isActive,
	}: {
		children: React.ReactElement
		isActive: boolean
	}) => (
		<button
			onClick={handleSwitch}
			className={`flex-center p-[5px] w-[50px] font-semibold text-[15px] rounded-[10px] ${
				isActive
					? 'bg-white shadow-lg text-black'
					: 'text-jc-text4 bg-transparent'
			}`}
		>
			{children}
		</button>
	)

	return (
		<>
			<Button isActive={isChecked}>
				<p>Tak</p>
			</Button>
			<Button isActive={!isChecked}>
				<p>Nie</p>
			</Button>
		</>
	)
}
