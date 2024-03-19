import AccountBlocked from '@/components/content/auth/AccountBlocked'
import RegistrationTrigger from '@/components/content/auth/RegistrationTrigger'

export default function AccountBlockedPage() {
	return (
		<div className="flex justify-center items-start flex-wrap gap-6">
			<AccountBlocked />
			<RegistrationTrigger />
		</div>
	)
}