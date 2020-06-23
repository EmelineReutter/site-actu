import React from 'react'
import './titre.css'

export default function Titre({ children }) {
    return (
        <h2 className="titre">
            {children}
        </h2>
    )
}
