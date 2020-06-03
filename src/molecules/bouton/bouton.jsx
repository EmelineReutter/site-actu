import React from 'react'
import './bouton.css'

function Bouton({ children, iconeDeGauche }) {
    return <button class="button">
        <div class="button-icon button-last-item">{iconeDeGauche}</div>
        <div class="button-text button-item">{children}</div>
        <div class='container-arrow'><div class="arrow-right icon arrow-right.icon:before"></div></div>
    </button>
}
export default Bouton 