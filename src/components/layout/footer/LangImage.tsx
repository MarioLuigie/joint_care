'use client'
import { ReactSVG } from 'react-svg'

import { Language } from '@/lib/types'

export default function LangImage({ language }: { language: Language }) {
	return (
		<div aria-label={language.alt}>
			<ReactSVG
				src={language.src}
			/>
		</div>
	)
}
