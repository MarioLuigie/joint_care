import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from '@/components/ui/card'
import Link from 'next/link'

import LinkNotif from './partials/notifs/AccountToActivateInfo'

export default function AccountActivate() {
	return (
		<Card className="auth-card">
			<CardHeader>
				<CardTitle>Aktywuj swoje konto</CardTitle>
				<CardDescription>
					Na podany adres e-mail wysłaliśmy link aktywacyjny. Aby aktywować
					konto postępuj zgodnie z instrukcją.
				</CardDescription>
			</CardHeader>
			<CardContent className="flex flex-col gap-3">
				<LinkNotif>
					<p className="pb-4">
						Nie dostałeś wiadomości z linkiem? Kliknij w poniższy link a wyślemy
						ponownie.
					</p>
					<Link href="#" className="text-[#048AED] underline">
						Wyślij ponownie
					</Link>
				</LinkNotif>
			</CardContent>
		</Card>
	)
}
