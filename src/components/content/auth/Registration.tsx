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
		<Card className='p-[40px] w-[480px] min-w-[350px]'>
			<CardHeader>
				<CardTitle>Nie mam konta</CardTitle>
				<CardDescription>Utwórz konto i zacznij korzystać z serwisu</CardDescription>
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
			</CardContent>
			<CardFooter className='flex flex-col gap-3'>
				<Button className='w-full'>
					Załóż konto
				</Button>
			</CardFooter>
		</Card>
	)
}