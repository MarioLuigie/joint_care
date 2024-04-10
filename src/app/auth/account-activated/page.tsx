import AccountActivate from '@/components/pages/auth/AccountActivate'
import LoginTrigger from '@/components/pages/auth/LoginTrigger'

export default function AccountActivatePage() {
	return (
		<div className="flex justify-center items-start flex-wrap gap-6">
			<LoginTrigger />
			<AccountActivate />
		</div>
	)
}