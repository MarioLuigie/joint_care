'use client'

import React from 'react'
import Image from 'next/image'
import { useState } from 'react'

import visibilityOff from "/public/assets/icons/visibility-off.svg"

interface InputProps {
  value: string
  name: string
  type: string
  placeholder: string
  label: string
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export default function Input ({
  value,
  name,
  type,
  placeholder,
  label,
  handleChange
}: InputProps) {
  const [ isPasswordHidden, setIsPasswordHidden ] = useState(true)

  const handleShowPassword = () => {
    setIsPasswordHidden(prev => !prev)
  }
  
  return (
    <div className='flex flex-col justify-center items-stretch relative'>
      <input 
        name={name}
        type={type === "password" ? (isPasswordHidden ? "password" : "text") : type}
        value={value}
        placeholder={placeholder}
        className='p-3 pt-7 rounded-lg border border-slate-300 h-[60px] focus:border-slate-200 focus:outline-none' 
        onChange={handleChange}
      />
      <p className='absolute top-2 left-3 text-[13px] text-[#999999]'>
        {label}
        <span className='text-[#0092FD]'>*</span>
      </p>
      {name === "password" ? 
        <div className='absolute right-5 cursor-pointer' onClick={handleShowPassword}>
          <Image 
            src={visibilityOff}
            width={20}
            height={14}
            alt="Ikona hasło ukryte" />
        </div> : null
      }
    </div>
  );
}

