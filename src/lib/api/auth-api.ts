import { IRegistrationForm, ILoginForm } from '@/lib/types'

export const registerUser = async (data: IRegistrationForm) => {
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

export const loginUser = async (data: ILoginForm) => {
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
