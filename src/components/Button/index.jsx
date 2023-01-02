import React from 'react'
import "./index.sass"

const index = ({ color, text }) => {
    return (
        <a href="#promo_section" className="button_component" style={{ backgroundColor: color }}>
            {text}
        </a>
    )
}

export default index