import React from 'react'

import './article-principal.css'

export default function ArticlePrincipal({ titre, texte, srcImage, lieu }) {
    return (
        <div className="article-principal">

            <img className="img-large" src={srcImage} />

            <div className="titre-article-principal color-white">
                <div className="entete-article">
                    <span>{titre}</span>
                    <h2>{lieu}</h2>
                </div>
                <p>{texte}</p>
            </div>

        </div>
    )
}