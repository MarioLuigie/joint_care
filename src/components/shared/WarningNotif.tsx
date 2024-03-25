import Image from 'next/image'

import warningIcon from '/public/assets/icons/warning.svg'

interface WarningProps {
	isError: boolean
	children: React.ReactNode
}

export default function WarningNotif({ isError, children }: WarningProps) {
	if (isError) {
		return (
			<div className="flex-start gap-3 bg-[#FBF4DD] p-4 mb-2 rounded-lg">
				<div>
					<Image src={warningIcon} alt="Ikona ostrzeżenia" />
				</div>
				<div className="text-[13px] text-[#C78523]">
					{children}
				</div>
			</div>) 
		} else {
		return null
	}
}