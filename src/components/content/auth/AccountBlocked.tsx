import { Button } from '@/components/ui/button'
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/card'
import Link from 'next/link'

import LoginAgain from '@/components/content/auth/partials/LoginAgainTiming'

export default function AccountBlocked() {

	return (
		<Card className="auth-card">
			<CardHeader>
				<CardTitle>Twoje konto zostało zablokowane</CardTitle>
				<CardDescription>
					Przekroczona została maksymalna liczba nieudanych logowań - konto zostało zablokowane.
				</CardDescription>
			</CardHeader>
			<CardContent className="flex flex-col gap-3">
				<LoginAgain />
			</CardContent>
			<CardFooter className="flex flex-col gap-3 pt-7">
				<Button className="w-full">Zaloguj</Button>
				<Link
					href="/auth/forgot-password"
					className="flex-center underline text-sm text-jc-text4"
				>
					<p>Zapomniałem hasło</p>
				</Link>
			</CardFooter>
		</Card>
	)
}
