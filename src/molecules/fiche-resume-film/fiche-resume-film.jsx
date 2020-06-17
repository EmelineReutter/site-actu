import React from 'react'

export default function FicheResumeFilm({ type, titre, auteur }) {
    return (
        <div>
            <span className='type_film'>{type}</span>
            <span className='titre_film'>{titre}</span>
            <span className='auteur_film'>{auteur}</span>
        </div>
    )
}
