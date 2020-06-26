import React from 'react'
import './article.css'

import Image from '../../atoms/image/image'

export default function Article({ categorie, titre, tempsDeLecture, srcImage }) {
    return (
        <div className="article">
            <div className="container-image-article">
                <Image src={srcImage} />
            </div>
            <div className="container-texte-article">
                <p>
                    <span className="text-it text-small">{categorie}</span>
                    <br />
                    <span className="text-bold">{titre}</span>
                    <br />
                    <span className="text-small">{tempsDeLecture}</span>
                </p>
            </div>
        </div>
    )
}
