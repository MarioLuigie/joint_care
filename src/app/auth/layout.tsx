import AuthHeader from '@/components/layout/AuthHeader'
import Main from '@/components/layout/Main'
import Footer from '@/components/layout/Footer'

export default function AuthLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<div className="flex flex-col min-h-screen">
			<AuthHeader />
			<Main>{children}</Main>
			<Footer />
		</div>
	)
}
