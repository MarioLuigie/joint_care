import AuthHeader from '@/components/layout/auth/AuthHeader'
import AuthMain from '@/components/layout/auth/AuthMain'
import Footer from '@/components/layout/Footer'

export default function AuthLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<div className="flex flex-col min-h-screen">
			<AuthHeader />
			<AuthMain>{children}</AuthMain>
			<Footer />
		</div>
	)
}
