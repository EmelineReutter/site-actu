import React from 'react'

export default function FicheResumeFilm({ children, type, titre, auteur }) {
    return (
        <div>
            {children}
            <span className='type_film'></span>
            <span className='titre_film'></span>
            <span className='auteur_film'></span>
        </div>
    )
}