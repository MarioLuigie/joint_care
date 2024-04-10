import { Button } from '@/components/ui/button'
import {
	Card,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/card'
import { routes } from '@/lib/constants'

import Link from 'next/link'

export default function LoginTrigger() {
	return (
		<Card className="auth-card">
			<CardHeader>
				<CardTitle>Mam konto</CardTitle>
				<CardDescription>Chcę się zalogować</CardDescription>
			</CardHeader>
			<CardFooter className="flex flex-col gap-3">
				<Link href={routes.AUTH_LOGIN}>
					<Button variant="outline" className="w-full">
						Zaloguj się
					</Button>
				</Link>
			</CardFooter>
		</Card>
	)
}
