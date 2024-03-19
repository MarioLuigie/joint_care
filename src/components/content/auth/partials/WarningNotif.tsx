import Image from 'next/image'

import { Children } from '@/lib/types'
import warningIcon from '/public/assets/icons/warning.svg'

export default function Warning({ children }: Children) {
	return (
		<div className="flex-start gap-3 bg-[#FBF4DD] p-4 mb-2 rounded-lg">
			<div>
				<Image src={warningIcon} alt="Ikona ostrzeżenia" />
			</div>
			<div className="text-[13px] text-[#C78523]">
      	{children}
			</div>
		</div>
	)
}