import React from 'react'

import './navbar.css'

import Bouton from '../bouton/bouton'
import Section from '../section/section'
import { SearchOutlined } from '@ant-design/icons';

export default function NavBar() {
    return (
        <div className="navbar">
            <Bouton titre="recherche" iconeDeGauche={<SearchOutlined />} >
                Recherche
            </Bouton>
            <Section titre='Programme TV' />
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