import Header from '@/components/layout/header/Header'
import Main from '@/components/layout/main/Main'
import Footer from '@/components/layout/footer/Footer'
import Sidebar from '@/components/layout/main/ProfileSidebar'

export default function QuestLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<div className="flex flex-col min-h-screen">
			<Header />
			<Main className="flex grow p-8 bg-jc-bg">
				<div className='flex gap-6 w-full'>
					<div>
						<Sidebar />
					</div>
					{children}
				</div>
			</Main>
			<Footer />
		</div>
	)
}