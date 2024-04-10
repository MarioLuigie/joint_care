import AuthHeader from '@/components/layout/header/HeaderAuth'
import Main from '@/components/layout/main/Main'
import Footer from '@/components/layout/footer/Footer'

export default function AuthLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<div className="flex flex-col min-h-screen">
			<AuthHeader />
			<Main className="flex-center grow p-10 bg-jc-bg">{children}</Main>
			<Footer />
		</div>
	)
}
