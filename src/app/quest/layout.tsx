import Header from '@/components/layout/header/Header'
import Main from '@/components/layout/main/Main'
import Footer from '@/components/layout/footer/Footer'
import QuestSidebar from '@/components/layout/main/QuestSidebar'

export default function QuestLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<div className="flex flex-col min-h-screen">
			<Header />
			<Main className="flex grow p-8 bg-jc-bg">
				<div className='flex justify-center gap-20 w-full'>
					<div>
						<QuestSidebar />
					</div>
					{children}
				</div>
			</Main>
			<Footer />
		</div>
	)
}