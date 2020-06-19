import React from 'react'
import './titre.css'

export default function Titre({ children, color, graisse }) {
    return (
        <div className="container-titre">
            <h2 className="titre">
                {children}
            </h2>
        </div>
    )
}
