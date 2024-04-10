import Header from '@/components/layout/header/Header'
import Main from '@/components/layout/main/Main'
import Footer from '@/components/layout/footer/Footer'

export default function ProfileLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<div className="flex flex-col min-h-screen">
			<Header />
			<Main className="flex grow p-8 bg-jc-bg">{children}</Main>
			<Footer />
		</div>
	)
}