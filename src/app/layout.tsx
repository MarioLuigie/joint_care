import type { Metadata } from 'next'
import localFont from 'next/font/local'
import { Poppins, Roboto } from 'next/font/google'
import { cn } from '@/lib/utils/'
import './globals.css'

// fonts
const poppins = Poppins({
	subsets: ['latin'],
	weight: ['300', '400', '500', '700', '900'],
	variable: '--font-poppins',
})

const roboto = Roboto({
	subsets: ['latin'],
	weight: ['300', '400', '500', '700', '900'],
	variable: '--font-roboto',
})

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

// @font-face {
// 	font-family: 'TitilliumWeb-Regular';
// 	src: url('/public/assets/fonts/TitilliumWeb-Regular.ttf') format('ttf');
// }

// /* LIGHT */
// @font-face {
// 	font-family: 'TitilliumWeb-Light';
// 	src: url('/public/assets/fonts/TitilliumWeb-Light.ttf') format('ttf')
// }

// @font-face {
// 	font-family: 'TitilliumWeb-ExtraLight';
// 	src: url('/public/assets/fonts/TitilliumWeb-ExtraLight.ttf') format('ttf')
// }

// /* BOLD */
// @font-face {
// 	font-family: 'TitilliumWeb-Bold';
// 	src: url('/public/assets/fonts/TitilliumWeb-Bold.ttf') format('ttf')
// }

// @font-face {
// 	font-family: 'TitilliumWeb-SemiBold';
// 	src: url('/public/assets/fonts/TitilliumWeb-SemiBold.ttf') format('ttf')
// }

// @font-face {
// 	font-family: 'TitilliumWeb-Black';
// 	src: url('/public/assets/fonts/TitilliumWeb-Black.ttf') format('ttf')
// }

// /* ITALIC */
// @font-face {
// 	font-family: 'TitilliumWeb-Italic';
// 	src: url('/public/assets/fonts/TitilliumWeb-Italic.ttf') format('ttf')
// }

// @font-face {
// 	font-family: 'TitilliumWeb-LightItalic';
// 	src: url('/public/assets/fonts/TitilliumWeb-LightItalic.ttf') format('ttf')
// }

// @font-face {
// 	font-family: 'TitilliumWeb-ExtraLightItalic';
// 	src: url('/public/assets/fonts/TitilliumWeb-ExtraLightItalic.ttf') format('ttf')
// }

// @font-face {
// 	font-family: 'TitilliumWeb-BoldItalic';
// 	src: url('/public/assets/fonts/TitilliumWeb-BoldItalic.ttf') format('ttf')
// }

// @font-face {
// 	font-family: 'TitilliumWeb-SemiBoldItalic';
// 	src: url('/public/assets/fonts/TitilliumWeb-SemiBoldItalic.ttf') format('ttf')
// }

// .font-titillium {
// 	font-family: 'TitilliumWeb-Regular', sans-serif;
// }


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
