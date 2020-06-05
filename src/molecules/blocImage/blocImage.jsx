import React from 'react'
import './blocImage.css'
import Texte from '../../atoms/texte/texte'
import Image from '../../atoms/image/image'

export default function BlocImage({ children }) {
    return (
        <div className='Container'>
            {children}
            <div> <Image></Image></div>
            <div>
                <Texte></Texte>
                <Texte></Texte>
                <Texte></Texte>
            </div>
        </div>
    )
}