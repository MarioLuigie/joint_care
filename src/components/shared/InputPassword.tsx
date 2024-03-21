'use client'

import React from 'react'
import Image from 'next/image'
import { useState } from 'react'

import visibilityOff from "/public/assets/icons/visibility-off.svg"
import ErrorMsg from './partials/ErrorMsg'

interface InputProps {
  value: string
  name: string
  placeholder: string
  label: string
  isClientError: boolean
  specificErrors: {error: boolean, msg: string}[]
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export default function Input ({
  value,
  name,
  placeholder,
  label,
  isClientError,
  specificErrors,
  handleChange
}: InputProps) {

  const [ isPasswordHidden, setIsPasswordHidden ] = useState(true)

  const handleShowPassword = () => {
    setIsPasswordHidden(prev => !prev)
  }
  
  return (
    <>
      <div className='flex flex-col justify-center items-stretch relative'>
        <input 
          name={name}
          type={ isPasswordHidden ? "password" : "text" }
          value={value}
          placeholder={placeholder}
          className='jc-input' 
          onChange={handleChange}
        />
        <p className='jc-inputLabel'>
          {label}
          <span className='text-[#0092FD]'>*</span>
        </p>
        <div className='absolute right-5 cursor-pointer' onClick={handleShowPassword}>
          <Image 
            src={visibilityOff}
            width={20}
            height={14}
            alt="Ikona hasło ukryte" />
        </div> 
      </div>
      <ErrorMsg 
        isClientError={isClientError} 
        specificErrors={specificErrors} 
      />
    </>
  );
}

