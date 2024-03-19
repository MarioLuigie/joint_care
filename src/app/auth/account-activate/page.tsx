import AccountActivate from '@/components/content/auth/AccountActivate'
import LoginTrigger from '@/components/content/auth/LoginTrigger'

export default function AccountActivatePage() {
	return (
		<div className="flex justify-center items-start flex-wrap gap-6">
			<LoginTrigger />
			<AccountActivate />
		</div>
	)
}