import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from '@/components/ui/card'

import LoginFormRef from '@/components/content/auth/forms/LoginFormRef'

export default function Login() {

	return (
		<Card className="auth-card">
			<CardHeader>
				<CardTitle>Zaloguj się</CardTitle>
				<CardDescription>Chcę się zalogować</CardDescription>
			</CardHeader>
			<CardContent>
				<LoginFormRef />
			</CardContent>
		</Card>
	)
}
