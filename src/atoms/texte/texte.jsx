import React from 'react'
import './texte.css'

export default function Texte({ children, type, titre, auteur }) {
    return (
        <div>
            <span className='type_film'></span>
            <span className='titre_film'></span>
            <span className='auteur_film'></span>
        </div>
    )
}