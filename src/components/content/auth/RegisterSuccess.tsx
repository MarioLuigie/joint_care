import { Button } from '@/components/ui/button'
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/card'
import Link from 'next/link'

import { routes } from '@/lib/constants'

export default function RegisterSuccess() {
	return (
		<Card className="auth-card">
			<CardHeader className="flex-center">
				<CardTitle>Gratalujemy</CardTitle>
			</CardHeader>
			<CardContent className="flex-center flex-col text-sm">
				<p>Twoje konto zostało pomyślnie aktywowane.</p>
				<p>Zaloguj się aby przejść do serwisu.</p>
			</CardContent>
			<CardFooter className="flex flex-col gap-3 pt-7">
				<Link href={routes.LOGIN}>
					<Button className="w-full">Zaloguj</Button>
				</Link>
			</CardFooter>
		</Card>
	)
}
