import React from 'react'

import './bouton.css'

export default function Bouton({ children, className, iconeDeGauche }) {
    return (
        <button className={"bouton-par-defaut " + className}>
            {iconeDeGauche} <span>{children}</span>
        </button>
    )
}