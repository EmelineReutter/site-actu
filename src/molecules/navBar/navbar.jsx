import React from 'react'

import './navbar.css'

import Bouton from '../bouton/bouton'
import Section from '../section/section'
import { SearchOutlined } from '@ant-design/icons';

export default function NavBar() {
    return (
        <div className="navbar">
            <div className="container">
                <Bouton titre="recherche" iconeDeGauche={<SearchOutlined />} >
                </Bouton>
                <Section titre='Programme TV'>
                    PROGRAMME TV
            </Section>
                <Section
                    titre='Cannes 2019' >
                    CANNES 2019
                </Section>
                <Section
                    titre='Cinémas' >
                    CINÉMAS
                </Section>
                <Section
                    titre='Écrans & TV' >
                    ÉCRANS & TV
                </Section>
                <Section
                    titre='Sortir' >
                    SORTIR
                </Section>
                <Section
                    titre='Musiques' >
                    MUSIQUES
                </Section>
                <Section
                    titre='Radio & podcasts' >
                    RADIO & PODCASTS
                </Section>
                <Section
                    titre='livres' >
                    LIVRES
                </Section>
            </div>
        </div>
    )
}