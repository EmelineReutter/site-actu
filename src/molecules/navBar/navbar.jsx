import React from 'react'

import './navbar.css'

import Bouton from '../bouton/bouton'
import Section from '../section/section'
import { SearchOutlined } from '@ant-design/icons';

export default function NavBar() {
    return (
        <div className="navbar">
            <Bouton titre="recherche" iconeDeGauche={<SearchOutlined />} >
            </Bouton>
            <Section titre='Programme TV'>
                Programme TV
            </Section>
            <Section
                titre='Cannes 2019' >
                Cannes 2019
                </Section>
            <Section
                titre='Cinémas' >
                Cinémas
                </Section>
            <Section
                titre='Écrans & TV' >
                Écrans et TV
                </Section>
            <Section
                titre='Sortir' >
                Sortir
                </Section>
            <Section
                titre='Musiques' >
                Musiques
                </Section>
            <Section
                titre='Radio & podcasts' >
                Radio & podcasts
                </Section>
            <Section
                titre='livres' >
                Livres
                </Section>
        </div>
    )
}