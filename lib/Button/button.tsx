import React, { ButtonHTMLAttributes, FunctionComponent } from 'react'
import './button.scss'
interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
    
}

const  Button:FunctionComponent<Props> = (props)=> {
    const { children} =props
    return (
        <button >
            <span>{children||''}</span>
        </button>
    )
}

export default Button