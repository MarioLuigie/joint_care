import ChangePasswordFormRef from '@/components/forms/profile/ChangePasswordForm'

export default function ChangePassword() {
	return (
		<div className="flex flex-col items-center justify-start p-8 rounded-[25px] w-full bg-white">
			<div className="flex flex-col gap-6 w-[400px] p-2">
				<p className="text-3xl font-bold">Zmiana hasła</p>
				<ChangePasswordFormRef />
			</div>
		</div>
	)
}
