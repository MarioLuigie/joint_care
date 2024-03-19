import { IRegistration } from '@/lib/types';

export const registerUser = async (data: IRegistration) => {
  const url = new URL(
    "https://jointcare.azurewebsites.net/api/v1/auth/register"
  );
  
  const headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
  };
  
  const body = {
    "email": data.email,
    "password": data.password,
    "password_confirmation": data.password_confirmation
  };

  try {
    const res = await fetch(url, {
      method: "POST",
      headers,
      body: JSON.stringify(body),
    });
    
    const data = await res.json();

    return data;

  } catch (err) {
    console.error('There was a problem with the registration request:', err);
  }
};
