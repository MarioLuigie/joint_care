import type { Metadata } from 'next'
import { cn } from '@/lib/utils/'
import localFont from 'next/font/local'
import './globals.css'

import { ContextProvider } from '@/lib/context'

// fonts
const titillium = localFont({
	src: [
		{
			path: './(fonts)/TitilliumWeb-Regular.ttf',
			weight: '400',
			style: 'normal',
		},
		{
			path: './(fonts)/TitilliumWeb-Bold.ttf',
			weight: '700',
			style: 'normal',
		},
	],
})

// metadata
export const metadata: Metadata = {
	title: 'Joint Care',
	description: 'Joint Care Front-end',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en">
			<body className={cn(titillium.className)}>
				<ContextProvider>
					{children}
				</ContextProvider>
			</body>
		</html>
	)
}
