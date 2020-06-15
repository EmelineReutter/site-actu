import React from 'react'

import Texte from '../../atoms/texte/texte'
import Image from '../../atoms/image/image'

export default function CartePresentationFilm({ src, auteur, type, titre }) {
    return (
        <div>
            <div className='container_films'>
                <Image />
            </div>
            <div className='textes'>
                <Texte />
            </div>
        </div>
    )
}