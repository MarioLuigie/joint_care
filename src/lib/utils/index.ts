import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs))
}

export function formatErrorMsg (msg: string) {
	const errorMsg = msg.charAt(0).toLowerCase() + msg.slice(1)
	return "Hasło powinno zawierać " + errorMsg
}