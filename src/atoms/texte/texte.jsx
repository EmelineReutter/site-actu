import React from 'react'

export default function Texte({ children, color, graisse }) {
    return (
        <div className="texte">
            {children}
            <p>
                Je suis un texte.
            </p>
        </div>
    )
}