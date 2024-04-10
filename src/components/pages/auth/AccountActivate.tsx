import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from '@/components/ui/card'
import Link from 'next/link'

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
				<div className="flex-start gap-3 bg-[#F5F8FC] p-4 mb-2 rounded-lg border-2 border-[#D1E1F6] border-dashed">
					<div className="text-[14px] font-normal text-[#030303]">
						<p className="pb-4">
							Nie dostałeś wiadomości z linkiem? Kliknij w poniższy link a
							wyślemy ponownie.
						</p>
						<Link href="#" className="text-[#048AED] underline">
							Wyślij ponownie
						</Link>
					</div>
				</div>
			</CardContent>
		</Card>
	)
}
