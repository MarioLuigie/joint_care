import Link from 'next/link'

export default function HomePage() {
	return (
		<div className="flex-center p-2">
			<Link href={'/dashboard'}>Go to Dashboard</Link>
		</div>
	)
}