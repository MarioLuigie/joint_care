import AuthHeader from '@/components/layout/auth/AuthHeader'
import Main from '@/components/layout/common/Main'
import Footer from '@/components/layout/common/Footer'

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
