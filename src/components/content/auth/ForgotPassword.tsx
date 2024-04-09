import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from '@/components/ui/card'

import ForgotPasswordForm from '@/components/content/auth/forms/ForgotPasswordFormRef'

export default function ForgotPassword() {

	return (
		<Card className="auth-card">
			<CardHeader>
				<CardTitle>Zapomniałeś hasła?</CardTitle>
				<CardDescription>
					Wprowadż swój adres email wyślemy Ci link z instrukcją do odzyskania
					dostępu do serwisu.
				</CardDescription>
			</CardHeader>
			<CardContent className="flex flex-col gap-3">
				<ForgotPasswordForm />
			</CardContent>
		</Card>
	)
}
