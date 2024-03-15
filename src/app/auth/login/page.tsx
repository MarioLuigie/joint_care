import Login from '@/components/content/auth/Login'
import RegistrationTrigger from '@/components/content/auth/RegistrationTrigger'

export default function LoginPage() {
	return (
		<div className="flex justify-center items-start flex-wrap gap-6">
			<Login />
			<RegistrationTrigger />
		</div>
	)
}
