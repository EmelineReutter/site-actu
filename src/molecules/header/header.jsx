import React from 'react'

import "./header.css"

import MenuHamburger from '../menu-hamburger/menuHamburger'
import Bouton from '../bouton/bouton'
import BoutonLogin from '../bouton-login/boutonLogin'

export default function Header() {
    return (
        <div className="header">
            <MenuHamburger />
            <div src="public/images/logoSite.png" className="logo-site"></div>
            <div className="boutons-header">

                <BoutonLogin />

                <Bouton className="bouton-jaune">
                    Je m'abonne
                </Bouton>
            </div>
        </div>
    )
}