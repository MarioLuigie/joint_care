'use client'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

import Input from '@/components/shared/inputs/Input'
import InputPassword from '@/components/shared/inputs/InputPassword'
import AlertNotif from '@/components/shared/notifs/AlertNotif'
import InputCheckbox from '@/components/shared/inputs/InputCheckBox'
import { LoginFormData } from '@/lib/types'
import { LoginFormErrors } from '@/lib/types'
import { loginUser } from '@/lib/api/auth-api'
import { validateLogin } from '@/lib/utils/validators'
import { errorMsg } from '@/lib/constants'
import { checkErrors } from '@/lib/utils'
import IncorrectDataAlert from '@/components/content/auth/partials/notifs/IncorrectDataAlert'
import { routes } from '@/lib/constants'

export default function LoginForm() {
	const initFormData: LoginFormData = {
		email: '',
		password: '',
	}

	const initFormErrors: LoginFormErrors = {
		email: [errorMsg.EMPTY],
		password: [errorMsg.EMPTY],
	}

	const router = useRouter()

	const [formData, setFormData] = useState<LoginFormData>(initFormData)
	const [formErrors, setFormErrors] = useState<LoginFormErrors>(initFormErrors)

	const [isServerError, setIsServerError] = useState<boolean>(false)
	const [isClientError, setIsClientError] = useState<boolean>(false)
	const [loginFailedCount, setLoginFailedCount] = useState(0);

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const updatedFormData = {
			...formData,
			[e.target.name]: e.target.value,
		}

		setFormErrors(validateLogin(updatedFormData))
		setFormData(updatedFormData)
		setIsServerError(false)
	}

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

		if (checkErrors(formErrors)) {
			const data = await loginUser(formData)

			console.log('Login:', data)

			if (data.errors) {
				setIsServerError(true)
				setIsClientError(false)
				setLoginFailedCount(prev => prev + 1)
			}

			if(loginFailedCount === 12) {
				router.push(routes.ACCOUNT_BLOCKED)
			}

			if (data.success) {
				setLoginFailedCount(0)
				router.push(routes.DASHBOARD)
			}

			console.log("***", loginFailedCount);
		} else {
			console.log('INVALID LOGINFORM')
			setIsClientError(true)
		}
	}

	return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
      <AlertNotif 
        isError={isServerError} 
        content={<IncorrectDataAlert />}
      />
      <div className="flex flex-col gap-3">
        <Input
          handleChange={handleChange}
          label="Adres e-mail"
          name="email"
          placeholder="Wpisz e-mail"
          type="email"
          isError={isClientError}
          errors={formErrors.email}
          value={formData.email}
        />
        <InputPassword
          handleChange={handleChange}
          label="Hasło"
          name="password"
          placeholder="Wpisz hasło"
          isError={isClientError}
          errors={formErrors.password}
          value={formData.password}
          />
        </div>
        <div className='pt-4'>
          <InputCheckbox 
            id="remember" 
            name='remember' 
            checked={false} 
            handleCheck={() => () => {}} 
            isError={isClientError} 
            errors={[]} 
            label='Zapamiętaj mnie'
          />
        </div>
			<div className="flex flex-col gap-2 pt-4">
				<Button className="w-full">
					Zaloguj
				</Button>
				<Link
					href={routes.FORGOT_PASSWORD}
					className="flex-center underline text-sm text-jc-text4"
				>
					<p>Zapomniałem hasło</p>
				</Link>
			</div>
    </form>
	)
}
