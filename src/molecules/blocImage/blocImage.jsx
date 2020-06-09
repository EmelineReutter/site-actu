import React from 'react'
import './blocImage.css'
import Texte from '../../atoms/texte/texte'
import Image from '../../atoms/image/image'

export default function BlocImage({ src, auteur, type, titre }) {
    return (
        <div className='container_films'>
            <div className='affiche1'><Image></Image></div>
            <div className='textes'>
                <Texte>

                </Texte>
            </div>
        </div>
    )
}