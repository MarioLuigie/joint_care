import Login from '@/components/pages/auth/Login'
import RegistrationTrigger from '@/components/pages/auth/RegistrationTrigger'

export default function LoginPage() {
	return (
		<div className="flex justify-center items-start flex-wrap gap-6">
			<Login />
			<RegistrationTrigger />
		</div>
	)
}
