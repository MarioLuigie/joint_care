import type { Metadata } from 'next'
import localFont from 'next/font/local'
import { cn } from '@/lib/utils/'
import './globals.css'

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
    }
  ],
})

// metadata
export const metadata: Metadata = {
	title: 'Join Care',
	description: 'Items list with CRUD',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en">
			<body
				className={cn(
					titillium.className
				)}
			>
				{children}
			</body>
		</html>
	)
}
