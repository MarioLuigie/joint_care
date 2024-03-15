"use client"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Link from "next/link"
import { useState } from "react"
import CheckboxDemo from "@/components/shared/CheckboxDemo"

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
		<Card className='p-[40px] w-[450px] min-w-[350px]'>
			<CardHeader>
				<CardTitle>Zaloguj się</CardTitle>
				<CardDescription>Chcę się zalogować</CardDescription>
			</CardHeader>
			<CardContent className='flex flex-col gap-3'>
				<Input 
					value={formData.email} 
					type="email" 
					name="email" 
					placeholder="Wpisz" 
					handleChange={handleChange} 
				/>
				<Input 
					value={formData.password} 
					type="password" 
					name="password" 
					placeholder="Hasło" 
					handleChange={handleChange}  
				/>
				<CheckboxDemo id="remember" label="Zapamiętaj mnie" />
			</CardContent>
			<CardFooter className='flex flex-col gap-2'>
				<Button className='w-full'>
					Zaloguj
				</Button>
				<Link href="#" className='flex-center underline text-sm text-jc-text4'>
					<p>Zapomniałem hasło</p>
				</Link>
			</CardFooter>
		</Card>
	)
}