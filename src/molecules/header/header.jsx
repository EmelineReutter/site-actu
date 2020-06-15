import React from 'react'
import { PoweroffOutlined } from '@ant-design/icons';

import "./header.css"

import MenuHamburger from '../menu-hamburger/menuHamburger'
import TitreSite from '../titre-site/titreSite'
import Bouton from '../bouton/bouton'


export default function Header() {
    return (
        <div className="header">
            <MenuHamburger />
            <TitreSite />
            <Bouton titre="login" />
            <Bouton titre="abonnement" />
            <Bouton iconeDeGauche={<PoweroffOutlined />}>
                Se connecter
            </Bouton>
            <Bouton graisse="bold" backgroundColor="yellow">
                Je m'abonne
            </Bouton>
        </div>
    )
}