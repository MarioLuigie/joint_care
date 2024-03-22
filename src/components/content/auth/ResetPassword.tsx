import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from '@/components/ui/card'
import Link from 'next/link'

import LinkNotif from './partials/LinkNotif'

export default function ResetPassword() {
	return (
		<Card className="auth-card">
			<CardHeader>
				<CardTitle>Resetuj swoje hasło</CardTitle>
				<CardDescription>
					Na podany adres e-mail wysłaliśmy link pozwalający na zmianę hasła.
					Aby zmienić hasło postępuj zgodnie z instrukcją.
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
