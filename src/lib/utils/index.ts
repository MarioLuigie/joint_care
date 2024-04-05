import { type ClassValue, clsx } from 'clsx'
import { Errors } from '../types'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs))
}

export function checkErrors(errors: Errors) {
	return Object.values(errors).every((errorsArray) =>
		errorsArray.every((error) => error === '')
	)
}

export function setUserProfile(data: any) {
	localStorage.setItem('profile', JSON.stringify(data))
}

export function getUserProfile() {
  const storedUser = localStorage.getItem('profile')
  if (storedUser !== null) {
    return JSON.parse(storedUser)
  }
  return null
}

