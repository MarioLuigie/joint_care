import Image from 'next/image'

import closeErrIcon from '/public/assets/icons/close-err.svg'

interface AlertNotifProps {
	isError: boolean
	children: React.ReactNode
}

export default function AlertNotif({ isError, children }: AlertNotifProps) {
	if(isError) {
		return (
			<div className="flex-start gap-3 bg-[#FDF4F5] p-4  rounded-lg">
				<div style={{minWidth: '25px'}}>
					<Image src={closeErrIcon} alt="Ikona błędu wprowadzonych danych" />
				</div>
				<div className="text-[13px] text-[#E04F5F]">
					{children}
				</div>
			</div>
		)
	} else {
		return null
	}
}