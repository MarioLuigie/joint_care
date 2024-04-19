import Header from '@/components/layout/header/Header'
import Footer from '@/components/layout/footer/Footer'
import Main from '@/components/layout/main/Main'

export default function ProfileLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<div className="flex flex-col min-h-screen">
			<Header />
			<Main className="flex-center grow p-8 bg-jc-bg">{children}</Main>
			<Footer />
		</div>
	)
}
