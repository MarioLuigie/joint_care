import {
	Card,
	CardFooter,
	CardDescription,
	CardHeader,
	CardTitle,
} from '@/components/ui/card'

import RegistrationForm from '@/components/forms/auth/RegistrationForm'

export default function Registration() {
	return (
		<Card className="auth-card">
			<CardHeader>
				<CardTitle>Nie mam konta</CardTitle>
				<CardDescription>
					Utwórz konto i zacznij korzystać z serwisu
				</CardDescription>
			</CardHeader>
			<CardFooter>
				<RegistrationForm />
			</CardFooter>
		</Card>
	)
}
