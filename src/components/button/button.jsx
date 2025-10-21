import React from 'react'
import './button.css'
const Button = () => {
    return (
        <button class="cta">
            <span>Hover me</span>
            <svg width="15px" height="10px" viewBox="0 0 13 10">
                <path d="M1,5 L11,5"></path>
                <polyline points="8 1 12 5 8 9"></polyline>
            </svg>
        </button>

    )
}

export default Button