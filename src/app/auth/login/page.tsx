"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useState } from "react"

import Input from "@/components/shared/Input"

interface FormData {
	email: string
	password: string
}

export default function Login() {
	const initFormData: FormData = {
    email: "",
    password: ""
  }

	const [ formData, setFormData ] = useState(initFormData)

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value
		})
		console.log(formData);
	}

	return (
		<div className="flex flex-col gap-10 bg-white rounded p-10">
			<div>
				<h1 className='text-jc-text1 text-[36px] font-[700]'>Zaloguj się</h1>
				<h6 className='text-jc-text3'>Chcę się zalogować</h6>
			</div>
			<div className='flex flex-col gap-2'>
				<Input value={formData.email} type="email" name="email" placeholder="Wpisz" handleChange={handleChange} />
				<Input value={formData.password} type="password" name="password" placeholder="Hasło" handleChange={handleChange}  />
			</div>
			<div className='flex flex-col gap-2'>
				<Button className='w-full'>Zaloguj</Button>
				<Link href="#" className='flex-center'><p className='text-jc-text4'>Zapomniałem hasło</p></Link>
			</div>
		</div>
	)
}