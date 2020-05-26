import React from 'react'
import './bouton.css'

function Bouton({ children }) {
    return <button class="button">
        <div class="button-text button-item">{children}</div>
        <div class="button-icon button-last-item"><div class="arrow-right icon"></div></div>
    </button>
}
export default Bouton 