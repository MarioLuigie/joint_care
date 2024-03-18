import Image from 'next/image'

import { Language } from '@/lib/types'

export default function LangImage({ language }: { language: Language }) {
	return (
		<div aria-label={language.alt}>
			<Image
				src={language.src}
				width={language.size}
				height={language.size}
				alt={language.alt}
			/>
		</div>
	)
}
