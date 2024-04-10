import axios from 'axios'

import { RegistrationFormData, LoginFormData } from '@/lib/utils/zod'

const baseUrl = 'https://jointcare.azurewebsites.net/api/v1/auth'
const API = axios.create({baseURL: baseUrl})

export const apiRegisterUser = async (data: RegistrationFormData) => {

  const headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
  }
  
  const body = {
    "email": data.email,
    "password": data.password,
    "password_confirmation": data.password_confirmation
  }

  try {
    const { data } = await API.post('/register', body, { headers })
    
    return data

  } catch (err: any) {
    if(err.response.data) {
      return err.response.data
    } else {
      console.error('There was a problem with the registration request:', err)
    }
  }
}

export const apiLoginUser = async (data: LoginFormData) => {

  const headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
  }

  let body = {
    "email": data.email,
    "password": data.password
  }

  try {
    const { data } = await API.post('/login', body, { headers })

    return data

  } catch (err: any) {
    if(err.response.data) {
      return err.response.data
    } else {
      console.error('There was a problem with the login request:', err)
    }
  }
}

export const apiLogoutUser = async (token: string) => {

  const headers = {
    "Authorization": `Bearer ${token}`,
    "Content-Type": "application/json",
    "Accept": "application/json",
  }

  try {
    const { data } = await API.post('/logout', null, { headers })

    return data
    
  } catch (err) {
    console.error('There was a problem with the logout request:', err)
  }
}
