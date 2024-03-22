import React from 'react'

import ErrorMsg from './partials/ErrorMsg'
import { ValidationError } from "@/lib/types"

interface InputProps {
  value: string
  validators: ValidationError[]
  name: string
  type: string
  placeholder: string
  label: string
  isClientError: boolean
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export default function Input ({
  value,
  validators,
  name,
  type,
  placeholder,
  label,
  isClientError,
  handleChange
}: InputProps) {

  console.log(validators)
  return (
    <>    
      <div className='flex flex-col justify-center items-stretch relative'>
        <input 
          name={name}
          type={type}
          value={value}
          placeholder={placeholder}
          className='jc-input' 
          onChange={handleChange}
        />
        <p className='jc-inputLabel'>
          {label}
          <span className='text-[#0092FD]'>*</span>
        </p>
      </div>
      <ErrorMsg isClientError={isClientError} validators={validators} />
    </>
  );
}

