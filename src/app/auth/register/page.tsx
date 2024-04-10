import LoginTrigger from '@/components/pages/auth/LoginTrigger'
import Registration from '@/components/pages/auth/Registration'

export default function RegistrationPage() {
	return (
		<div className="flex justify-center items-start flex-wrap gap-6">
			<LoginTrigger />
			<Registration />
		</div>
	)
}
