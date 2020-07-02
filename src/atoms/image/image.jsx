import React from 'react'

import './image.css'

export default function Image({ src, className }) {
    return (
        <img className={className} src={src} />
    )
}
