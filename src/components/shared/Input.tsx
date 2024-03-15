import React from 'react';
import VisibilityIcon from "/public/assets/icons/visibility 1.svg"

interface InputProps {
  value: string
  name: string
  type: string
  placeholder: string
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export default function Input ({
  value,
  name,
  type,
  placeholder,
  handleChange
}: InputProps) {
  
  return (
    <input 
      name={name}
      type={type}
      value={value}
      placeholder={placeholder}
      className='rounded-lg border border-slate-300 h-[60px] p-3 focus:border-slate-200 focus:outline-none' 
      onChange={handleChange}
    />
  );
}

      //  InputProps={name === 'password' ? {
      //     endAdornment: (
      //       <InputAdornment position="end">
      //         <IconButton onClick={handleShowPassword}>
      //           {type === 'password' ? <VisibilityIcon /> : <VisibilityOffIcon />}
      //         </IconButton>
      //       </InputAdornment>
      //     ),
      //   } : null}
      // />

