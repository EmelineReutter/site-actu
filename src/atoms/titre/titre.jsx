import React from 'react'

export default function Titre({ children, color, graisse }) {
    return (
        <h2 className="titre">
            {children}
        </h2>
    )
}
