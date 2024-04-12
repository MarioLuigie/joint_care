import {
	Card,
	CardFooter,
	CardDescription,
	CardHeader,
	CardTitle,
} from '@/components/ui/card'

import LoginForm from '@/components/forms/auth/LoginForm'

export default function Login() {
	return (
		<Card className="auth-card">
			<CardHeader>
				<CardTitle>Zaloguj się</CardTitle>
				<CardDescription>Chcę się zalogować</CardDescription>
			</CardHeader>
			<CardFooter>
				<LoginForm />
			</CardFooter>
		</Card>
	)
}
