import React from 'react'
import './blocImage.css'
import Texte from '../../atoms/texte/texte'
import Image from '../../atoms/image/image'

export default function BlocImage({ children }) {
    return (
        <div className='container_films'>
            {children}
            <div className='images'><Image></Image></div>
            <div className='textes'>
                <Texte>
                    Putin j'aimerais bien comprendre çe que je fais.
                </Texte>
            </div>
        </div>
    )
}