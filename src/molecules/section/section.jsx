import React from 'react'

import './section.css'

export default function Section({ titre, children }) {
    return (
        <div className="section">
            <span className="titre-section">{children}</span>
        </div>
    )
}