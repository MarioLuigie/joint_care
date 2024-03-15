import LoginTrigger from '@/components/content/auth/login/LoginTrigger'
import Registration from '@/components/content/auth/register/Registration'

export default function RegistrationPage() {
	return (
		<div className="flex justify-center items-start flex-wrap gap-6">
			<LoginTrigger />
			<Registration />
		</div>
	)
}
