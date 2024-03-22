import { 
  LoginFormData, 
  RegistrationFormData, 
  RegisterValidationErrors, 
  LoginValidationErrors,
  ForgotPasswordFormData,
  ForgotPasswordValidationErrors
} from '@/lib/types'
import { errorMsg } from '@/lib/constants'

const V = {
  email: (email: string) => (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)),
  uppercase: (text: string) => (/[A-Z]/.test(text)),
  lowercase: (text: string) => (/[a-z]/.test(text)),
  digit: (text: string) => (/\d/.test(text)),
  specialChar: (text: string) => (/[^A-Za-z0-9]/.test(text)),
  minLength: (text: string, numb: number) => (text.length >= numb),
  maxLength: (text: string, numb: number) => (text.length <= numb),
  confirm: (text1: string, text2: string) => (text1 === text2)
}

export const validateRegistration = (formData: RegistrationFormData) => {
  
  const errors: RegisterValidationErrors = {
    email: [
      {
        error: V.email(formData.email), 
        msg: errorMsg.EMAIL
      }
    ],
    password: [
      {
        error: V.lowercase(formData.password) && V.uppercase(formData.password), 
        msg: errorMsg.PASSWORD_LETTER_SIZE
      },
      {
        error: V.digit(formData.password), 
        msg: errorMsg.PASSWORD_DIGIT
      },
      {
        error: V.specialChar(formData.password), 
        msg: errorMsg.PASSWORD_SPECIAL_CHAR
      },
      {
        error: V.minLength(formData.password, 8), 
        msg: errorMsg.PASSWORD_LENGTH
      },
    ],
    password_confirmation: [
      {
        error: V.confirm(formData.password, formData.password_confirmation), 
        msg: errorMsg.PASSWORD_CONFIRMATION
      }      
    ]
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