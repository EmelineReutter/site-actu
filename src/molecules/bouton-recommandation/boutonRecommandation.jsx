import React from 'react'
import './boutonRecommandation.css'

function BoutonRecommandation({ children, iconeDeGauche }) {
    return <button class="button">
        <div class="button-icon button-last-item"><span className="icon-medium">{iconeDeGauche}</span></div>
        <div class="button-text button-item">{children}</div>
        <div class='container-arrow'><div class="arrow-right icon"></div></div>
    </button>
}
export default BoutonRecommandation