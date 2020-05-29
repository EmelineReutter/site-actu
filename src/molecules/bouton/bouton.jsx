import React from 'react'
import './bouton.css'

function Bouton({ children, IconedeGauche }) {
    return <button class="button">
        <div class="button-text button-item">{children}</div>
        <div class="button-icon button-last-item"></div>{IconedeGauche}
        <div class="arrow-right icon"></div>
    </button>
}
export default Bouton 