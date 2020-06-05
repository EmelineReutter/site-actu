import React from 'react'
import './texte.css'

export default function Texte({ children }) {
    return (
        <div>
            {children}
            <span className='type_film'></span>
            <span className='titre_film'></span>
            <span className='auteur_film'></span>
        </div>
    )
}




/*
export default function Texte({ couleur, graisse, children }) {
    // Admettons que couleur = 'red', si je veux écrire 'text-color-red', en JavaScript, je dois écrire 'text-color-' + couleur
    // Si, pas envie de mettre des +, tu peux écrire `text-color-${couleur}`
    text - color - red
    return (
        <span className={`text-color-${couleur}`}></span>
        <span style={{ color: couleur }}></span>
        <span>Je suis un texte, je devrais m'afficher en {couleur}, mais flemme d'écrire le css, et je devrais avoir comme graisse {graisse}. Et je dois afficher le texte : {children}</span>
    )
}

export default function TexteImage({ children, auteur, type, titre }) {
    return (
        <div className='texte_image'>
            {children}
            <span className='type_film'>{type}</span>
            <span className='titre_film'>{titre}</span>
            <span className='auteur_film'>{auteur}</span>
        </div>
    ) */