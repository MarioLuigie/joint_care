import axios from 'axios'

import { ProfileFormData } from '@/lib/zod/profile'

const baseUrl = 'https://jointcare.azurewebsites.net/api/v1/user/profile'
const API = axios.create({ baseURL: baseUrl })

export const getUserProfile = async (token: string) => {
	const headers = {
		Authorization: `Bearer ${token}`,
		'Content-Type': 'application/json',
		Accept: 'application/json',
	}

	try {
		const { data } = await API.get('/me', { headers })
		return data
	} catch (err: any) {
		if (err.response.data) {
			return err.response.data
		} else {
			console.error(err)
		}
	}
}

export const updateUserProfile = async (
	token: string,
	data: ProfileFormData
) => {
	const headers = {
		Authorization: `Bearer ${token}`,
		'Content-Type': 'application/json',
		Accept: 'application/json',
	}

	const body = {
		name: data.name,
		last_name: data.surname,
		sex: data.sex,
		city: data.address,
		birth_date: new Date(data.date).toISOString().split('.')[0],
		weight: Number(data.weight),
		height: Number(data.height),
	}

	try {
		const { data } = await API.post('/update', body, { headers })
		return data
	} catch (err: any) {
		if (err.response.data) {
			// console.log(err.response.data)
			return err.response.data
		} else {
			console.error(err)
		}
	}
}
