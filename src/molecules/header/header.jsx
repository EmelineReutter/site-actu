import React from 'react'

import "./header.css"

import MenuHamburger from '../../atoms/menu-hamburger/menuHamburger'
import TitreSite from '../../atoms/titre-site/titreSite'
import BoutonLogin from '../../atoms/bouton-login/boutonLogin'
import BoutonAbonnement from '../../atoms/bouton-abonnement/boutonAbonnement'
import Bouton from '../bouton/bouton'


export default function Header() {
    return (
        <div className="header">
            <MenuHamburger />
            <TitreSite />
            <BoutonLogin />
            <BoutonAbonnement />
            <Bouton iconeDeGauche={<IconeConnexion />}>
                Se connecter
            </Bouton>
            <Bouton graisse="bold" backgroundColor="yellow">
                Je m'abonne
            </Bouton>
        </div>
    )
}