import React from 'react'

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
  
  return (
    <div className='flex flex-col relative'>
      <input 
        name={name}
        type={type}
        value={value}
        placeholder={placeholder}
        className='p-3 pt-7 rounded-lg border border-slate-300 h-[60px] focus:border-slate-200 focus:outline-none' 
        onChange={handleChange}
      />
      <p className='absolute top-2 left-3 text-[13px] text-[#999999]'>{label}<span className='text-[#0092FD]'>*</span></p>
    </div>
  );
}
