import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function Dashboard() {
	return (
		<div className="flex-center flex-col p-2">
			<h1>DASHBOARD</h1>
			<Link href="/">
				<Button variant="secondary">Back</Button>
			</Link>
		</div>
	)
}
