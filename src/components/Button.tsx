import React from 'react'
import { StyledBtn } from '../styles/Button.styled'

function Button({
    label,
    handler,
    bg
}:{
    label: string;
    handler: any;
    bg?: string
} ){
    return (
        <StyledBtn bg={bg} onClick={handler}>
            {label}
        </StyledBtn>
    )
}

export default Button
