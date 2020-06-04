import React from 'react'
import './texte.image.css'

export default function Texte_image({ icones }) {
    return (
        <div className='texte_image'>
            <span className='type_film'></span>
            <span className='titre_film'>{icones}</span>
            <span className='auteur_film'></span>
        </div>
    )
}