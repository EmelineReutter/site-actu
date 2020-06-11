import React from 'react'

import './navbar.css'

import IconeRecherche from '../../atoms/icone-recherche/iconeRecherche'
import Section from '../../atoms/section/section'

export default function NavBar() {
    return (
        <div className="navbar">
            <IconeRecherche />
            <Section
                titre='Programme TV' />
            <Section
                titre='Cannes 2019' />
            <Section
                titre='Cinémas' />
            <Section
                titre='Écrans & TV' />
            <Section
                titre='Sortir' />
            <Section
                titre='Musiques' />
            <Section
                titre='Radio & podcasts' />
            <Section
                titre='livres' />
        </div>
    )
}