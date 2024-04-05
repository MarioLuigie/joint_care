import Header from '@/components/layout/Header'
import Main from '@/components/layout/Main'
import Footer from '@/components/layout/Footer'

export default function ProfileLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<div className="flex flex-col min-h-screen">
			<Header />
			<Main className="grow p-8 bg-jc-bg">{children}</Main>
			<Footer />
		</div>
	)
}