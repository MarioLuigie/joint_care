import { 
  LoginFormData, 
  RegistrationFormData, 
  RegisterValidationErrors, 
  LoginValidationErrors,
  ForgotPasswordFormData,
  ForgotPasswordValidationErrors
} from '@/lib/types'

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export const validateRegistration = (formData: RegistrationFormData) => {
  
  const passwordLength = 8
  const passwordRegex = {
    uppercase: /[A-Z]/,
    lowercase: /[a-z]/,
    digit: /\d/,
    specialChars: /[^A-Za-z0-9]/
  }
  
  const errors: RegisterValidationErrors = {
    email: emailRegex.test(formData.email),
    password_confirmation: formData.password === formData.password_confirmation,
    password_letter_size: (passwordRegex.uppercase.test(formData.password) && passwordRegex.lowercase.test(formData.password)),
    password_digit: passwordRegex.digit.test(formData.password),
    password_special_chars: passwordRegex.specialChars.test(formData.password),
    password_length: formData.password.length >= passwordLength
  }
  
  return errors
}

export const validateLogin = (formData: LoginFormData) => {
  
  const passwordLength = 0
  
  const errors: LoginValidationErrors = {
    email: emailRegex.test(formData.email),
    password_length: formData.password.length > passwordLength
  }
  
  return errors
}

export const validateForgotPassword = (formData: ForgotPasswordFormData) => {

  const errors: ForgotPasswordValidationErrors = {
    email: emailRegex.test(formData.email),
  }
  
  return errors
}