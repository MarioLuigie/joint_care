import LoginTrigger from '@/components/content/auth/LoginTrigger'
import Registration from '@/components/content/auth/Registration'

export default function RegistrationPage() {
	return (
		<div className="flex justify-center items-start flex-wrap gap-6">
			<LoginTrigger />
			<Registration />
		</div>
	)
}
