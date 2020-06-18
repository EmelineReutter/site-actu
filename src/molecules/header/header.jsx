import React from 'react'
import { LoginOutlined } from '@ant-design/icons';

import "./header.css"

import MenuHamburger from '../menu-hamburger/menuHamburger'
import TitreSite from '../titre-site/titreSite'
import BoutonLogin from '../bouton-login/boutonLogin'


export default function Header() {
    return (
        <div className="header">
            <MenuHamburger />
            <TitreSite> Télérama </TitreSite>
            <div className="boutons-header">
                <BoutonLogin iconeDeGauche={<LoginOutlined />} border="none">
                    Se connecter
                </BoutonLogin>
                <BoutonLogin graisse="bold" backgroundColor="yellow">
                    Je m'abonne
                </BoutonLogin>
            </div>
        </div>
    )
}