import React from 'react'

import ErrorMsg from './partials/ErrorMsg'

interface IInputProps {
  value: string
  name: string
  type: string
  placeholder: string
  label: string
  isClientError: boolean
  specificErrors: {error: boolean, msg: string}[]
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export default function Input ({
  value,
  name,
  type,
  placeholder,
  label,
  isClientError,
  specificErrors,
  handleChange
}: IInputProps) {

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
      <ErrorMsg isClientError={isClientError} specificErrors={specificErrors} />
    </>

  );
}

