import { type ClassValue, clsx } from 'clsx'
import { Validators } from '../types'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs))
}

export function checkValidators(validators: Validators) {
	return Object.values(validators).every((validationErrors) =>
		validationErrors.every((error) => error.error)
	)
}
