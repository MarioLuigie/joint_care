import { RegistrationFormData, LoginFormData } from '@/lib/types'

export const apiRegisterUser = async (data: RegistrationFormData) => {
  const url = new URL(
    "https://jointcare.azurewebsites.net/api/v1/auth/register"
  )
  
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
    const res = await fetch(url, {
      method: "POST",
      headers,
      body: JSON.stringify(body)
    })
    
    const data = await res.json()

    return data

  } catch (err) {
    console.error('There was a problem with the registration request:', err)
  }
};

export const apiLoginUser = async (data: LoginFormData) => {
  const url = new URL(
    "https://jointcare.azurewebsites.net/api/v1/auth/login"
  )

  const headers = {
      "Content-Type": "application/json",
      "Accept": "application/json",
  }

  let body = {
      "email": data.email,
      "password": data.password
  }

  try {
    const res = await fetch(url, {
      method: "POST",
      headers,
      body: JSON.stringify(body)
    })

    const data = await res.json()

    return data

  } catch (err) {
    console.error('There was a problem with the login request:', err)
  }
}

export const apiLogoutUser = async (userToken: string) => {
  const url = new URL(
    "https://jointcare.azurewebsites.net/api/v1/auth/logout"
  )

  const headers = {
    "Authorization": `Bearer ${userToken}`,
    "Content-Type": "application/json",
    "Accept": "application/json",
  }

  try {
    const res = await fetch(url, {
      method: 'POST',
      headers
    })

    const data = await res.json()

    return data
    
  } catch (err) {
    console.error('There was a problem with the logout request:', err)
  }
}
