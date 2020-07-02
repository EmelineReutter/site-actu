import React from 'react'
import './boutonLogin.css'

import { LoginOutlined } from '@ant-design/icons'

export default function boutonLogin({ iconeDeGauche }) {
    return (
        <button id="bouton-login">
            {iconeDeGauche = <LoginOutlined />} <span id="texte-bouton-login"> Se connecter </span>
        </button>
    )
}