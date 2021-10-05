import React from 'react'
import { StyledInput } from '../styles/Input.styled'
import { IInput } from './types'

export default function Input({
    type,
    placeholder,
    value,
    onchange,
    label,
    id,
    name,
    width,
    marginRight,
    height,
}:IInput) {
    return (
        <StyledInput margin={marginRight} height={height} width={width}>
            <label htmlFor={id}>
                {label}
            </label>
            <input 
                
                name={name}
                id={id}
                type={type} 
                placeholder={placeholder} 
                value={value} 
                onChange={onchange} 
            />
        </StyledInput>
    )
}
