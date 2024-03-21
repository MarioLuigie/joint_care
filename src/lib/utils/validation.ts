import { IRegistrationForm, IValidationErrors } from '@/lib/types'

export const validate = (formData: IRegistrationForm) => {
  
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  const passwordLength = 8
  const passwordRegex = {
    uppercase: /[A-Z]/,
    lowercase: /[a-z]/,
    digit: /\d/,
    specialChars: /[^A-Za-z0-9]/
  }
  
  const errors: IValidationErrors = {
    email: emailRegex.test(formData.email),
    password_confirmation: formData.password === formData.password_confirmation,
    password_letter_size: (passwordRegex.uppercase.test(formData.password) && passwordRegex.lowercase.test(formData.password)),
    password_digit: passwordRegex.digit.test(formData.password),
    password_special_chars: passwordRegex.specialChars.test(formData.password),
    password_length: formData.password.length >= passwordLength
  }
  
  return errors
}