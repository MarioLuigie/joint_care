import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function DashboardPage() {
	return (
		<div className="flex-center w-full flex-col p-2 bg-black">
			<h1>DASHBOARD</h1>
			<Link href="/" className="w-full">
				<Button variant="outline">Back</Button>
			</Link>
		</div>
	)
}
