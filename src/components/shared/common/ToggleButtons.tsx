'use client'

//modules
import { useState } from 'react'

export default function ToggleButtons({
	className,
	activClassName,
	disactiveClassName,
}: {
	className?: string
	activClassName: string
	disactiveClassName: string
}) {
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
			className={`flex-center p-[5px] w-full h-full font-semibold ${className} ${
				isActive ? activClassName : disactiveClassName
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
