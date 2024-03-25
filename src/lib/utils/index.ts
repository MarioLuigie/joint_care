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
