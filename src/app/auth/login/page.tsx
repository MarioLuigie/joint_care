import Login from "@/components/content/auth/login/Login"
import RegistrationTrigger from "@/components/content/auth/register/RegistrationTrigger"



export default function LoginPage() {

	return (
		<div className="flex justify-center items-start flex-wrap gap-6">
			<Login />
			<RegistrationTrigger />
		</div>
	)
}