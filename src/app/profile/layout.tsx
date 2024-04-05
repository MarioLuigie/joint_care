import Header from '@/components/layout/common/Header'
import ProfileMain from '@/components/layout/Main'
import Footer from '@/components/layout/common/Footer'

export default function ProfileLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<div className="flex flex-col min-h-screen">
			<Header />
			<ProfileMain>{children}</ProfileMain>
			<Footer />
		</div>
	)
}